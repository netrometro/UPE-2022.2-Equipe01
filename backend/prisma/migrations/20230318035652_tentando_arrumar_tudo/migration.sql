/*
  Warnings:

  - You are about to drop the column `userId` on the `Cart` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropIndex
DROP INDEX "product_name_key";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "userId";
