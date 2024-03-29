export const Config = {
  timezone: "Asia/Tokyo",
  server: {
    port: Number(process.env.SERVER_PORT),
  },
  redis: {
    host: process.env.REDIS_HOST as string,
  },
  salt: {
    pass: process.env.SALT_PASS as string,
    hash: process.env.SALT_HASH as string,
    token: process.env.SALT_TOKEN as string,
    tokenReq: process.env.SALT_TOKEN_REQ as string,
  },
  recaptcha: {
    siteKey: process.env.RECAPTCHA_SITE_KET as string,
    secretKey: process.env.RECAPTCHA_SECRET_KET as string,
  },
  faktory: {
    url: process.env.FAKTORY_URL as string,
  },
  vapid: {
    subject: process.env.VAPID_SUBJECT as string,
    publicKey: process.env.VAPID_PUBLIC_KEY as string,
    privateKey: process.env.VAPID_PRIVATE_KEY as string,
  },
};
