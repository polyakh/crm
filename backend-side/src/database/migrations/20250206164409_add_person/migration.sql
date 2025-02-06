-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "ccEmail" TEXT NOT NULL,
    "activeFlag" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "labelIds" INTEGER[],
    "orgId" INTEGER NOT NULL,
    "closedDealsCount" INTEGER NOT NULL,
    "openDealsCount" INTEGER NOT NULL,
    "nextActivityDate" TIMESTAMP(3),
    "ownerId" INTEGER NOT NULL,
    "primaryEmail" TEXT NOT NULL,
    "nextActivityTime" TIMESTAMP(3),
    "emails" JSONB NOT NULL,
    "phones" JSONB NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
