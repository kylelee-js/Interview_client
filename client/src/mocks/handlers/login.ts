// src/mocks/handlers.ts
import { rest } from "msw";

export const login = rest.post(
  "http://localhost:8000/user/login/",
  async (req, res, ctx) => {
    const response = {
      access: "asdasdada",
      isLogin: true,
      name: "Kyle",
      nickname: "Lee",
      pk: 14,
    };
    const { email, password } = await req.json();
    if (email === "kylelee@danbiedu.co.kr" && password === "dlsrks12") {
      return res(ctx.status(200), ctx.json(response));
    } else {
      return res(
        ctx.status(400),
        ctx.json({
          errorMessage: "잘못된 이메일 또는 비밀번호입니다.",
        })
      );
    }
  }
);
export const notice = rest.get(
  "http://localhost:8000/user/notice/",
  async (req, res, ctx) => {
    const response = {
      isChanged: false,
    };
    return res(ctx.status(200), ctx.json(response));
  }
);
