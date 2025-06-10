-- CreateTable
CREATE TABLE "ItemSolaire" (
    "id" SERIAL NOT NULL,
    "intitule" TEXT NOT NULL,
    "lienImage" TEXT NOT NULL,

    CONSTRAINT "ItemSolaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pack" (
    "id" SERIAL NOT NULL,
    "intitule" TEXT NOT NULL,

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("id")
);
