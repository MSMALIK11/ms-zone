import { render, screen } from "@testing-library/react";
import App from "./App";

test("render MS-ZONE", () => {
  render(<App />);
  const linkElement = screen.getByText(/MS-ZONE/i);
  expect(linkElement).toBeInTheDocument();
});
