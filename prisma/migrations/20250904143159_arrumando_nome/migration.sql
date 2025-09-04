/*
  Warnings:

  - You are about to drop the `hair_colors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "hair_colors";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "hair_tones" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "favorites" BOOLEAN NOT NULL DEFAULT false
);
