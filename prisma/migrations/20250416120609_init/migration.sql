/*
  Warnings:

  - Added the required column `idUserCat` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "idUserCat" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "UserCategorie" (
    "idUserCat" SERIAL NOT NULL,
    "nomCat" TEXT NOT NULL,

    CONSTRAINT "UserCategorie_pkey" PRIMARY KEY ("idUserCat")
);

-- CreateTable
CREATE TABLE "FactureElement" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "nombre" INTEGER NOT NULL,
    "montant" INTEGER NOT NULL,
    "factureId" INTEGER NOT NULL,

    CONSTRAINT "FactureElement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facture" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Facture_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idUserCat_fkey" FOREIGN KEY ("idUserCat") REFERENCES "UserCategorie"("idUserCat") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FactureElement" ADD CONSTRAINT "FactureElement_id_fkey" FOREIGN KEY ("id") REFERENCES "Facture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
