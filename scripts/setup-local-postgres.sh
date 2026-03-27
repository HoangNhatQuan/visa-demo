#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
BACKEND_ENV_FILE="${BACKEND_ENV_FILE:-$BACKEND_DIR/.env}"

if [[ -f "$BACKEND_ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$BACKEND_ENV_FILE"
  set +a
fi

DB_URL_USER=""
DB_URL_PASSWORD=""
DB_URL_HOST=""
DB_URL_PORT=""
DB_URL_NAME=""

if [[ -n "${DATABASE_URL:-}" ]] && [[ "$DATABASE_URL" =~ ^postgres(ql)?://([^:/?]+)(:([^@/?]*))?@([^:/?]+)(:([0-9]+))?/([^?]+) ]]; then
  DB_URL_USER="${BASH_REMATCH[2]}"
  DB_URL_PASSWORD="${BASH_REMATCH[4]}"
  DB_URL_HOST="${BASH_REMATCH[5]}"
  DB_URL_PORT="${BASH_REMATCH[7]}"
  DB_URL_NAME="${BASH_REMATCH[8]}"
fi

DB_HOST="${DB_HOST:-${DB_URL_HOST:-${PGHOST:-localhost}}}"
DB_PORT="${DB_PORT:-${DB_URL_PORT:-${PGPORT:-5432}}}"
DB_NAME="${DB_NAME:-${DB_URL_NAME:-${PGDATABASE:-visa_ops}}}"
DB_USER="${DB_USER:-${DB_URL_USER:-${PGUSER:-postgres}}}"
DB_PASSWORD="${DB_PASSWORD:-${DB_URL_PASSWORD:-postgres}}"
ADMIN_DB="${ADMIN_DB:-postgres}"

if ! command -v psql >/dev/null 2>&1; then
  echo "Error: psql is not installed. Please install PostgreSQL client first."
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "Error: pnpm is not installed."
  exit 1
fi

echo "Checking local PostgreSQL at ${DB_HOST}:${DB_PORT}..."
if ! pg_isready -h "$DB_HOST" -p "$DB_PORT" >/dev/null 2>&1; then
  echo "Error: PostgreSQL is not running on ${DB_HOST}:${DB_PORT}."
  exit 1
fi

echo "Ensuring role '${DB_USER}' exists..."
psql -h "$DB_HOST" -p "$DB_PORT" -d "$ADMIN_DB" -c \
  "DO \$\$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = '${DB_USER}') THEN CREATE ROLE ${DB_USER} LOGIN PASSWORD '${DB_PASSWORD}'; END IF; END \$\$;"

echo "Ensuring role '${DB_USER}' has CREATEDB..."
psql -h "$DB_HOST" -p "$DB_PORT" -d "$ADMIN_DB" -c \
  "ALTER ROLE ${DB_USER} CREATEDB;"

echo "Ensuring database '${DB_NAME}' exists..."
DB_EXISTS="$(psql -h "$DB_HOST" -p "$DB_PORT" -d "$ADMIN_DB" -tAc "SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'")"
if [[ "$DB_EXISTS" != "1" ]]; then
  psql -h "$DB_HOST" -p "$DB_PORT" -d "$ADMIN_DB" -c \
    "CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};"
fi

echo "Running Prisma migrations and client generation..."
cd "$BACKEND_DIR"
pnpm run prisma:migrate
pnpm run prisma:generate

echo
echo "Local Postgres setup complete."
echo "Database URL expected by backend/.env:"
echo "postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public"
