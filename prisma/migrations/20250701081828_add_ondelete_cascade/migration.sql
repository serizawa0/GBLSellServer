-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "libele" TEXT NOT NULL,
    "unite" TEXT NOT NULL,
    "nombre" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
