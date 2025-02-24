/*
  Warnings:

  - You are about to drop the column `contactPerson` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `organization` on the `Lead` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Language" AS ENUM ('EN', 'UK');

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "contactPerson",
DROP COLUMN "organization",
ADD COLUMN     "name" VARCHAR(255),
ADD COLUMN     "orgName" VARCHAR(255);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "anguage" "Language" NOT NULL DEFAULT 'EN',
ALTER COLUMN "password" DROP NOT NULL;
