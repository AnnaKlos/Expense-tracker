import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

test("it render component with header and a form", () => {
  render(<Home />);

  const title = screen.getByText(/expense tracker/i);
  const expenceInput = screen.getByRole("textbox");
  const costInput = screen.getByRole("spinbutton");
  const addButton = screen.getByRole("button", { name: "+" });

  expect(title).toBeInTheDocument();
  expect(expenceInput).toBeInTheDocument();
  expect(costInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});
