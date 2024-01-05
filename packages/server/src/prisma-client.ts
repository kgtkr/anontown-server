import * as P from "@prisma/client";

export const prisma = new P.PrismaClient();

class RollbackError extends Error {}

export async function $transactionAfterRollback(
  callback: (prisma: P.Prisma.TransactionClient) => Promise<void>
): Promise<void> {
  try {
    await prisma.$transaction(async (prisma) => {
      // TODO: テストのために外部キー制約を無視しているが、本来集約外では外部キー制約を消すべき
      await prisma.$executeRaw`SET session_replication_role = 'replica';`;
      await callback(prisma);
      throw new RollbackError();
    });
  } catch (e) {
    if (e instanceof RollbackError) {
      return;
    }
    throw e;
  }
}
