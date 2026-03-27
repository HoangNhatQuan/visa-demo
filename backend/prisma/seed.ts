import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is required (use backend/.env)');
  }

  const email = process.env.SEED_ADMIN_EMAIL?.trim() || 'admin@visa-ops.local';
  const password = process.env.SEED_ADMIN_PASSWORD || 'Admin123!';
  const name = process.env.SEED_ADMIN_NAME?.trim() || 'Admin';

  const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
  });

  const hashed = await bcrypt.hash(password, SALT_ROUNDS);

  await prisma.user.upsert({
    where: { email },
    update: { password: hashed, name, role: Role.ADMIN },
    create: { email, password: hashed, name, role: Role.ADMIN },
  });

  console.log(`Seed admin OK → email: ${email}  password: ${password}`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
