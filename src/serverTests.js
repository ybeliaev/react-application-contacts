import { rest } from "msw";
import { setupServer } from "msw/node";
import { USERS } from "./__fixtures__/users";

const handlers = [
  rest.get("https://randomuser.me/api/?results=20", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: USERS }));
  }),
];

export const server = setupServer(...handlers);
