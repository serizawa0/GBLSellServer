/*
  Warnings:

  - Added the required column `categorie` to the `Facture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Facture" ADD COLUMN     "categorie" TEXT NOT NULL;
