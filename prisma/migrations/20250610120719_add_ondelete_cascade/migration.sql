/*
  Warnings:

  - Added the required column `projectId` to the `FileGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_groupId_fkey";

-- AlterTable
ALTER TABLE "FileGroup" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ProjectType" (
    "id" SERIAL NOT NULL,
    "typeName" TEXT NOT NULL,

    CONSTRAINT "ProjectType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "client" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ProjectType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FileGroup" ADD CONSTRAINT "FileGroup_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "FileGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
