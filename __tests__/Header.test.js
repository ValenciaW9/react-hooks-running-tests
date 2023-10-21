import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  expect(screen.getByText("hello from the Header!")).toBeInTheDocument();
});