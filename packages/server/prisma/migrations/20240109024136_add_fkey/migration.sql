-- AddForeignKey
ALTER TABLE "tokenReqs" ADD CONSTRAINT "tokenReqs_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "tokens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reses" ADD CONSTRAINT "reses_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reses" ADD CONSTRAINT "reses_reply_id_fkey" FOREIGN KEY ("reply_id") REFERENCES "reses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "res_votes" ADD CONSTRAINT "res_votes_res_id_fkey" FOREIGN KEY ("res_id") REFERENCES "reses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "history_tags" ADD CONSTRAINT "history_tags_history_id_fkey" FOREIGN KEY ("history_id") REFERENCES "histories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "topic_tags" ADD CONSTRAINT "topic_tags_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "topic_subscriptions" ADD CONSTRAINT "topic_subscriptions_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
