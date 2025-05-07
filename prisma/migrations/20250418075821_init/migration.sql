/*
  Warnings:

  - Added the required column `autorisation` to the `UserCategorie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserCategorie" ADD COLUMN     "autorisation" INTEGER NOT NULL;
