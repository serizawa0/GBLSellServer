/*
  Warnings:

  - You are about to drop the column `lienImage` on the `ItemSolaire` table. All the data in the column will be lost.
  - Added the required column `image` to the `ItemSolaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemSolaire" DROP COLUMN "lienImage",
ADD COLUMN     "image" TEXT NOT NULL;
