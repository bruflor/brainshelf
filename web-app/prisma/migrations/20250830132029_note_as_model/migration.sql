/*
  Warnings:

  - You are about to drop the column `note` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `ReadingSession` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "content" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AuthorToNote" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AuthorToNote_A_fkey" FOREIGN KEY ("A") REFERENCES "Author" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AuthorToNote_B_fkey" FOREIGN KEY ("B") REFERENCES "Note" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_NoteToReadingSession" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_NoteToReadingSession_A_fkey" FOREIGN KEY ("A") REFERENCES "Note" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_NoteToReadingSession_B_fkey" FOREIGN KEY ("B") REFERENCES "ReadingSession" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Author" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "gender" TEXT,
    "nationality" TEXT,
    "bio" TEXT,
    "birthDate" DATETIME,
    "deathDate" DATETIME
);
INSERT INTO "new_Author" ("bio", "birthDate", "deathDate", "gender", "id", "name", "nationality") SELECT "bio", "birthDate", "deathDate", "gender", "id", "name", "nationality" FROM "Author";
DROP TABLE "Author";
ALTER TABLE "new_Author" RENAME TO "Author";
CREATE TABLE "new_ReadingSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL,
    "dateStarted" DATETIME,
    "dateFinished" DATETIME,
    "currentPage" INTEGER,
    "progress" REAL,
    "rating" INTEGER,
    "format" TEXT,
    "mediaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ReadingSession_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ReadingSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ReadingSession" ("createdAt", "currentPage", "dateFinished", "dateStarted", "format", "id", "mediaId", "progress", "rating", "status", "updatedAt", "userId") SELECT "createdAt", "currentPage", "dateFinished", "dateStarted", "format", "id", "mediaId", "progress", "rating", "status", "updatedAt", "userId" FROM "ReadingSession";
DROP TABLE "ReadingSession";
ALTER TABLE "new_ReadingSession" RENAME TO "ReadingSession";
CREATE UNIQUE INDEX "ReadingSession_userId_mediaId_status_key" ON "ReadingSession"("userId", "mediaId", "status");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToNote_AB_unique" ON "_AuthorToNote"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToNote_B_index" ON "_AuthorToNote"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_NoteToReadingSession_AB_unique" ON "_NoteToReadingSession"("A", "B");

-- CreateIndex
CREATE INDEX "_NoteToReadingSession_B_index" ON "_NoteToReadingSession"("B");
