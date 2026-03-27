-- CreateEnum
CREATE TYPE "VisaApplicationStatus" AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'DOCS_REQUIRED', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OPERATOR');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'OPERATOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisaApplication" (
    "id" UUID NOT NULL,
    "applicantName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "destinationCountry" TEXT NOT NULL,
    "visaType" TEXT NOT NULL,
    "travelDate" TIMESTAMP(3) NOT NULL,
    "status" "VisaApplicationStatus" NOT NULL DEFAULT 'SUBMITTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisaApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisaApplicationNote" (
    "id" UUID NOT NULL,
    "applicationId" UUID NOT NULL,
    "authorId" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VisaApplicationNote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_createdAt_id_idx" ON "User"("role", "createdAt", "id");

-- CreateIndex
CREATE INDEX "VisaApplication_status_idx" ON "VisaApplication"("status");

-- CreateIndex
CREATE INDEX "VisaApplication_email_idx" ON "VisaApplication"("email");

-- CreateIndex
CREATE INDEX "VisaApplication_createdAt_id_idx" ON "VisaApplication"("createdAt", "id");

-- CreateIndex
CREATE INDEX "VisaApplication_status_createdAt_id_idx" ON "VisaApplication"("status", "createdAt", "id");

-- CreateIndex
CREATE INDEX "VisaApplicationNote_applicationId_createdAt_idx" ON "VisaApplicationNote"("applicationId", "createdAt");

-- AddForeignKey
ALTER TABLE "VisaApplicationNote" ADD CONSTRAINT "VisaApplicationNote_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "VisaApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisaApplicationNote" ADD CONSTRAINT "VisaApplicationNote_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
