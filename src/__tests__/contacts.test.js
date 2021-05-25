import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";

import { Contacts } from "../pages/Contacts";
import { server } from "../serverTests";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe(`contacts get data`, () => {
  test(`contacts get data success`, async () => {
    render(<Contacts />);

    const loader = screen.getByTestId("contacts-loader");

    expect(loader).toBeInTheDocument();
    await waitForElementToBeRemoved(loader);
  });
});

test(`success`, async () => {
  render(<Contacts />);

  const loader = screen.getByTestId("contacts-loader");

  await waitForElementToBeRemoved(loader);

  expect(loader).not.toBeInTheDocument();
  expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
});

test(`fail`, async () => {
  server.use(
    rest.get("https://randomuser.me/api/?results=20", (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ error: "Internal server error" }));
    })
  );
  render(<Contacts />);

  const loader = screen.getByTestId("contacts-loader");

  await waitForElementToBeRemoved(loader);

  expect(loader).not.toBeInTheDocument();
  expect(screen.getByTestId("contacts-error")).toBeInTheDocument();
});

describe(`contacts data view mode`, () => {
  test(`should equal table`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");
    await waitForElementToBeRemoved(loader);

    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-viewmode-table")).toHaveClass(
      "Mui-selected"
    );
    expect(
      screen.queryByTestId("contacts-grid-container") // queryByTestId т.к элемента может не быть
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-viewmode-grid")).not.toHaveClass(
      "Mui-selected"
    );
  });
});
