waitFor } from "@testing-library/react";
test("displays the text 'hello from the Header!'", async () => {
  render(<Header />);

  await waitFor(() => {
    expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
  });
});