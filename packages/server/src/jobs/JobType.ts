import { z } from "zod";
import { Job, Client, Worker } from "faktory-worker";

export interface JobType<A> {
  type: string;
  arg: z.ZodType<A>;
}

// 型推論のためのヘルパー関数
export function JobType<A>(value: JobType<A>): JobType<A> {
  return value;
}

export function createJob<A>(client: Client, type: JobType<A>, arg: A): Job {
  return client.job(type.type, arg);
}

export function registerWorker<A>(
  worker: Worker,
  type: JobType<A>,
  handler: (arg: A) => Promise<void>
): void {
  worker.register(type.type, async (raw) => {
    const arg = type.arg.parse(raw);
    await handler(arg);
  });
}
