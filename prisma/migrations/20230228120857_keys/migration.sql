-- CreateTable
CREATE TABLE "Key" (
    "kid" TEXT NOT NULL,
    "alg" TEXT NOT NULL,
    "size" TEXT,
    "exp" TIMESTAMP(3),
    "key" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Key_pkey" PRIMARY KEY ("kid")
);
