/*
  Warnings:

  - You are about to alter the column `nombre` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "nombre" SET DATA TYPE INTEGER;
