import { render, screen ,logRoles, getByText} from "@testing-library/react";
import App from "./App";

test("render MS-ZONE", () => {
  render(<App />);

  const logoelement = screen.getByRole("textbox", {
    name: "search",
    exact: false,
  });
  expect(logoelement).toBeInTheDocument();
});
