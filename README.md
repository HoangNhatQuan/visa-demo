# Visa Ops (MVP)

NestJS + Prisma + PostgreSQL + Next.js (App Router).  
Mục tiêu là một hệ thống vận hành hồ sơ visa có xác thực, phân quyền, quản lý trạng thái, ghi chú theo vòng đời xử lý.

## 1. WHAT - Project này làm gì?

### Core business features

- Authentication bằng JWT: đăng ký, đăng nhập.
- Role-based access control: `ADMIN` và `OPERATOR`.
- CRUD cho operator (admin-only).
- Quản lý visa applications:
  - Tạo hồ sơ (admin-only),
  - Danh sách có filter + search + phân trang,
  - Xem chi tiết,
  - Cập nhật status theo rule transition,
  - Thêm note theo hồ sơ.

### Non-functional features đã có

- Rate limit ở backend theo route + IP, có endpoint-level override.
- Login lockout chống brute-force theo email.
- Validation + exception mapping (Prisma error -> HTTP error rõ nghĩa).
- FE có timeout request, retry có điều kiện + exponential backoff cho query.
- FE dùng React Query để cache, stale-time, invalidation theo domain action.

## 2. HOW - Kiến trúc và cách triển khai

### Folder structure (high-level)

```txt
.
├── backend/
│   ├── src/
│   │   ├── auth/                 # JWT auth, guards, roles
│   │   ├── users/                # operator management
│   │   ├── visa-applications/    # core visa workflow
│   │   ├── common/               # rate-limit guard, filters, decorators
│   │   └── prisma/               # prisma module/service
│   └── prisma/
│       └── schema.prisma         # data model + indexes
├── frontend/
│   ├── app/                      # Next.js App Router pages/layout/providers
│   ├── hooks/                    # query/mutation hooks + debounce
│   ├── services/                 # typed API clients
│   ├── components/               # reusable UI blocks
│   └── contexts/                 # auth + toast state
└── scripts/
    └── setup-local-postgres.sh   # local DB bootstrap + migrate/generate
```

### Backend (NestJS + Prisma)

- **API design**
  - REST theo bounded context: `/auth`, `/users`, `/visa-applications`.
  - Controller mỏng, business logic tập trung ở service.
  - DTO + validation pipe toàn cục để fail-fast input.
- **Security & resilience**
  - `AuthGuard` + `RolesGuard` để enforce authn/authz.
  - Rate limit guard global; auth endpoints có mức chặt hơn.
  - Response headers `X-RateLimit-*` + `Retry-After` để client xử lý tốt hơn.
  - Lockout đăng nhập theo cửa sổ thời gian để giảm brute-force.
- **Data pattern & performance**
  - Prisma query có pagination (`skip/take`) + deterministic order (`createdAt`, `id`).
  - Filter/search theo trạng thái và từ khóa.
  - Schema có index phục vụ truy vấn chính:
    - `VisaApplication`: `status`, `email`, `(createdAt,id)`, `(status,createdAt,id)`.
    - `User`: `(role,createdAt,id)`.
    - `VisaApplicationNote`: `(applicationId,createdAt)`.
  - `count` + `findMany` chạy song song bằng `Promise.all`.

### Frontend (Next.js + React Query)

- **Tác dụng của Next.js trong project**
  - App Router tổ chức page/layout theo domain route rõ ràng.
  - Routing + code-splitting theo route giúp scale màn hình tốt hơn.
  - Redirect từ root về flow chính (`/visa-applications`) để UX tập trung.
- **Client data architecture**
  - Tách `services` (transport) khỏi `hooks` (server-state orchestration).
  - `queryKeys` chuẩn hóa cache key, dễ invalidate chính xác.
  - React Query dùng:
    - `staleTime`, `gcTime`, `placeholderData`,
    - retry có điều kiện lỗi transient (408/429/5xx/network),
    - exponential backoff, mutation không auto-retry.
- **UI performance**
  - Debounce search để giảm call volume.
  - `useCallback` cho handler quan trọng, giảm re-render child không cần thiết.
  - Phân tách component theo table/filter/modal/detail để giới hạn rerender scope.

## 3. WHY - Vì sao chọn thiết kế này?

- **Modular by domain** giúp mỗi feature (auth/users/visa-applications) độc lập và dễ mở rộng.
- **Service-oriented backend** giữ controller nhẹ, test business rule dễ hơn.
- **Guard/filter/decorator** tận dụng đúng “NestJS way” cho cross-cutting concerns.
- **React Query thay vì state tự quản** để xử lý caching/retry/invalidation đúng chuẩn production nhanh hơn.
- **Prisma + explicit indexes** giảm độ phức tạp SQL thủ công nhưng vẫn kiểm soát được hiệu năng truy vấn chính.
- **Chấp nhận in-memory guard cho MVP** để setup nhanh; có lộ trình nâng cấp distributed store khi scale.

## 4. Những phần chưa làm (hoặc intentionally deferred)

- Chưa có distributed rate limiting (Redis) cho multi-instance.
- Chưa có observability đầy đủ (structured logging, metrics, tracing, alerting).
- Chưa có test coverage hoàn chỉnh (unit/integration/e2e cho toàn bộ luồng).
- Chưa có refresh token / rotation / revoke list cho JWT lifecycle đầy đủ.
- Search hiện tại dùng `contains`; chưa tối ưu full-text search nâng cao.
- Chưa có audit trail đầy đủ cho mọi thay đổi nghiệp vụ.

## 5. Nếu có thêm thời gian, tôi sẽ cải thiện gì?

- Bổ sung Redis-backed rate limiter + login lockout shared state cho horizontal scale.
- Thêm idempotency key cho các write endpoint nhạy cảm.
- Bổ sung OpenAPI/Swagger + contract tests giữa FE/BE.
- Viết test pyramid:
  - unit test cho status transition và auth policies,
  - integration test cho Prisma/service,
  - e2e cho flow login -> list -> detail -> update status -> add note.
- Thêm observability stack (pino + OTEL + Prometheus/Grafana).
- Tối ưu search bằng PostgreSQL full-text/trigram index khi volume tăng.

## 6. Quick run

### 1. Database (from repo root)

```bash
bash scripts/setup-local-postgres.sh
```

### 2. Backend (`backend/.env`)

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/visa_ops?schema=public"
PORT=8080
JWT_SECRET="your-secret"
CORS_ORIGIN="http://localhost:3000"
```

```bash
cd backend
pnpm install
pnpm run prisma:seed
pnpm run start:dev
```

API: `http://localhost:8080`

### 3. Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL="http://localhost:8080"
```

```bash
cd frontend
pnpm install
pnpm run dev
```

App: `http://localhost:3000` (`/login`).

## 7. Screenshots (placeholder)

### Danh sách

<img width="1463" height="802" alt="image" src="https://github.com/user-attachments/assets/188f95ff-31b5-4914-bc74-723eba38516d" />


### Chi tiết

<img width="1364" height="857" alt="image" src="https://github.com/user-attachments/assets/2e642fce-04bd-454b-99d4-757b9a477c27" />


### Đổi status hoặc thêm note

<img width="1299" height="857" alt="image" src="https://github.com/user-attachments/assets/7e3862a3-5789-47fd-a8f3-92c23deb3c4b" />

