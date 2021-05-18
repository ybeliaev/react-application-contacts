import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Contacts } from "../pages/Contacts";

test(`contacts get data success`, async () => {
  render(<Contacts />);

  const loader = screen.getByTestId("contacts-loader");

  expect(loader).toBeInTheDocument();

  await waitForElementToBeRemoved(loader);
  screen.debug();
});
