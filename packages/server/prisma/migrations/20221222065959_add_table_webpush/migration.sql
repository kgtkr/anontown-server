-- CreateTable
CREATE TABLE "push_subscriptions" (
    "user_id" VARCHAR(64) NOT NULL,
    "endpoint" VARCHAR(255) NOT NULL,
    "p256dh" VARCHAR(255) NOT NULL,
    "auth" VARCHAR(255) NOT NULL,

    CONSTRAINT "push_subscriptions_pkey" PRIMARY KEY ("user_id","endpoint")
);

-- CreateTable
CREATE TABLE "topic_subscriptions" (
    "user_id" VARCHAR(64) NOT NULL,
    "topic_id" VARCHAR(64) NOT NULL,

    CONSTRAINT "topic_subscriptions_pkey" PRIMARY KEY ("user_id","topic_id")
);

-- CreateIndex
CREATE INDEX "push_subscriptions_user_id_idx" ON "push_subscriptions"("user_id");

-- CreateIndex
CREATE INDEX "push_subscriptions_endpoint_idx" ON "push_subscriptions"("endpoint");

-- CreateIndex
CREATE INDEX "topic_subscriptions_topic_id_idx" ON "topic_subscriptions"("topic_id");

-- CreateIndex
CREATE INDEX "topic_subscriptions_user_id_idx" ON "topic_subscriptions"("user_id");
