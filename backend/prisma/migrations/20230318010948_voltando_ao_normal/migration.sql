/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductOnCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_productId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductOnCart" DROP CONSTRAINT "ProductOnCart_cartId_fkey";

-- DropForeignKey
ALTER TABLE "ProductOnCart" DROP CONSTRAINT "ProductOnCart_productId_fkey";

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "quantity" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "ProductOnCart";
