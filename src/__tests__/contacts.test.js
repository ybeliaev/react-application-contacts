import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
// src/mocks/handlers.js
import { rest } from "msw";
// src/mocks/server.js
import { setupServer } from "msw/node";

import { Contacts } from "../pages/Contacts";
import { users } from "../constants/constants";

const handlers = [
  rest.get("https://randomuser.me/api/?results=20", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ results: users }));
  }),
];

const server = setupServer(...handlers);

test(`contacts get data success`, async () => {
  render(<Contacts />);

  const loader = screen.getByTestId("contacts-loader");

  expect(loader).toBeInTheDocument();

  await waitForElementToBeRemoved(loader);
  screen.debug();
});
