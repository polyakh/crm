/*
  Warnings:

  - You are about to drop the column `company` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Lead` table. All the data in the column will be lost.
  - Added the required column `contactPerson` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerName` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `Lead` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `Lead` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "LeadLabel" AS ENUM ('HOT', 'WARM', 'COLD');

-- CreateEnum
CREATE TYPE "LeadSource" AS ENUM ('REFERRAL', 'WEBSITE', 'ADVERTISEMENT', 'OTHER');

-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_statusId_fkey";

-- DropForeignKey
ALTER TABLE "Lead" DROP CONSTRAINT "Lead_userId_fkey";

-- DropIndex
DROP INDEX "Lead_company_idx";

-- DropIndex
DROP INDEX "Lead_created_at_idx";

-- DropIndex
DROP INDEX "Lead_email_idx";

-- DropIndex
DROP INDEX "Lead_name_idx";

-- DropIndex
DROP INDEX "Lead_statusId_idx";

-- DropIndex
DROP INDEX "Lead_userId_idx";

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "company",
DROP COLUMN "name",
DROP COLUMN "notes",
ADD COLUMN     "contactPerson" VARCHAR(255) NOT NULL,
ADD COLUMN     "expectedCloseDate" TIMESTAMPTZ,
ADD COLUMN     "leadLabel" "LeadLabel",
ADD COLUMN     "leadSource" "LeadSource",
ADD COLUMN     "organization" VARCHAR(255) NOT NULL,
ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD COLUMN     "ownerName" VARCHAR(255) NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "statusId" DROP NOT NULL,
ALTER COLUMN "statusId" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
