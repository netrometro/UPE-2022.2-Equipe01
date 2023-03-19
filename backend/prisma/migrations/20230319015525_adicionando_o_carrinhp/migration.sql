/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Cart` table. All the data in the column will be lost.
  - Added the required column `cartId` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_productId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "createdAt",
DROP COLUMN "productId",
DROP COLUMN "quantity";

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "cartId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
