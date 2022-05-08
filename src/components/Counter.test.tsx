import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("counts correctly", async () => {
  const user = userEvent.setup();
  render(<Counter />);
  expect(screen.getByText("Count", { exact: false })).toHaveTextContent(
    "Count: 0"
  );
  await user.click(screen.getByText("Increment"));
  expect(screen.getByText("Count", { exact: false })).toHaveTextContent(
    "Count: 1"
  );
  await user.click(screen.getByText("Increment"));
  await user.click(screen.getByText("Increment"));
  await user.click(screen.getByText("Increment"));
  expect(screen.getByText("Count", { exact: false })).toHaveTextContent(
    "Count: 4"
  );
});

test("displays suffix", async () => {
  const user = userEvent.setup();
  let { unmount, rerender } = render(<Counter suffix="thing" />);
  expect(screen.getByText("Count", { exact: false })).toHaveTextContent(
    "Count: 0thing"
  );
  rerender(<Counter suffix=" thing" />);
  expect(screen.getByText("Count", { exact: false })).toHaveTextContent(
    "Count: 0 thing"
  );
  await user.click(screen.getByText("Increment"));
  expect(screen.getByText("Count", { exact: false })).toHaveTextContent(
    "Count: 1 thing"
  );
  unmount();

  render(<Counter suffix=" thing" pluralString="ies" />);
  expect(screen.getByText("Count", { exact: false })).toHaveTextContent(
    "Count: 0 thingies"
  );
  await user.click(screen.getByText("Increment"));
  expect(screen.getByText("Count", { exact: false })).toHaveTextContent(
    "Count: 1 thing"
  );
  await user.click(screen.getByText("Increment"));
  expect(screen.getByText("Count", { exact: false })).toHaveTextContent(
    "Count: 2 thingies"
  );
});
