import { render, screen } from "@testing-library/react";
import App from "./App";

test("render lets build e-commere website", () => {
  render(<App />);
  const linkElement = screen.getByText(/lets build e-commere website/i);
  expect(linkElement).toBeInTheDocument();
});
