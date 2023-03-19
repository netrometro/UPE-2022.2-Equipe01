/*
  Warnings:

  - You are about to drop the column `UserId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `cartId` on the `product` table. All the data in the column will be lost.
  - Added the required column `productId` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_UserId_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_cartId_fkey";

-- DropIndex
DROP INDEX "product_name_key";

-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "product" DROP COLUMN "UserId",
DROP COLUMN "cartId";

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
