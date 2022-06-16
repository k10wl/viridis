import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import reactRenderer from "react-test-renderer";

import Button from "../index";

const onClick = jest.fn();

test("Button test", () => {
  const tree = reactRenderer
    .create(<Button onClick={onClick}>snapshot</Button>)
    .toJSON();

  expect(tree).toMatchSnapshot();

  const { rerender } = render(<Button onClick={onClick}>button text</Button>);

  const buttonNode = screen.getByText(/button text/gi);

  expect(buttonNode).toBeInTheDocument();
  expect(buttonNode).toBeEnabled();

  fireEvent.click(buttonNode);
  expect(onClick).toBeCalledTimes(1);

  rerender(
    <Button onClick={onClick} disabled>
      disabled button
    </Button>
  );

  onClick.mockReset();

  const disabledButtonNode = screen.getByText(/disabled button/gi);

  expect(disabledButtonNode).toBeInTheDocument();
  expect(disabledButtonNode).toBeDisabled();

  fireEvent.click(disabledButtonNode);
  expect(onClick).not.toBeCalled();
});
