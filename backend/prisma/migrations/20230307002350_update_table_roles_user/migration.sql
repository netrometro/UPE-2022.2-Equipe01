/*
  Warnings:

  - You are about to drop the column `roleId` on the `users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "RoleEnum" AS ENUM ('ADMIN', 'GERENTE', 'CLIENTE');

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_roleId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "roleId",
ADD COLUMN     "role" "RoleEnum" NOT NULL DEFAULT 'CLIENTE';
