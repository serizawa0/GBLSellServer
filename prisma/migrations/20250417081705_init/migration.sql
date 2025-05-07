-- DropForeignKey
ALTER TABLE "FactureElement" DROP CONSTRAINT "FactureElement_id_fkey";

-- AddForeignKey
ALTER TABLE "FactureElement" ADD CONSTRAINT "FactureElement_factureId_fkey" FOREIGN KEY ("factureId") REFERENCES "Facture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
