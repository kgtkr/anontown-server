import * as P from "@prisma/client";

export const prisma = new P.PrismaClient();

class RollbackError extends Error {}

export async function $transactionAfterRollback(
  callback: (prisma: P.Prisma.TransactionClient) => Promise<void>
): Promise<void> {
  try {
    await prisma.$transaction(async (prisma) => {
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
