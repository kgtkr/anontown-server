import axios from "axios";
import { AtCaptchaError } from "../../at-error";
import { Config } from "../../config";
import { IRecaptchaClient } from "../../ports";

export class RecaptchaClient implements IRecaptchaClient {
  async verify(apiParamRecaptcha: string): Promise<void> {
    const result = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      undefined,
      {
        params: {
          secret: Config.recaptcha.secretKey,
          response: apiParamRecaptcha,
        },
      },
    );

    if (!(result.data as any).success) {
      throw new AtCaptchaError();
    }
  }
}
