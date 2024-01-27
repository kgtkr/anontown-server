/*
  Warnings:

  - The primary key for the `push_subscriptions` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "push_subscriptions" DROP CONSTRAINT "push_subscriptions_pkey",
ALTER COLUMN "endpoint" SET DATA TYPE VARCHAR(2048),
ADD CONSTRAINT "push_subscriptions_pkey" PRIMARY KEY ("user_id", "endpoint");
