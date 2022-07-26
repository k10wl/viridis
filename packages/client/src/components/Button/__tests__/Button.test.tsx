import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import reactRenderer from "react-test-renderer";

import { Button } from "../index";

const onClick = jest.fn();

const BUTTON_NAME = "Button";

function getButtonNode(): HTMLElement {
  return screen.getByRole("button", {
    name: BUTTON_NAME,
  });
}

describe("Button", () => {
  test("should render correctly", () => {
    const tree = reactRenderer
      .create(<Button onClick={onClick}>{BUTTON_NAME}</Button>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("disabled button should render correctly", () => {
    const tree = reactRenderer
      .create(
        <Button disabled onClick={onClick}>
          Button
        </Button>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("should be enabled and clickable", () => {
    render(<Button onClick={onClick}>{BUTTON_NAME}</Button>);

    expect(getButtonNode()).toBeEnabled();

    fireEvent.click(getButtonNode());

    expect(onClick).toBeCalledTimes(1);
  });

  test("should be disabled and not clickable", () => {
    render(
      <Button onClick={onClick} disabled>
        {BUTTON_NAME}
      </Button>
    );

    expect(getButtonNode()).toBeDisabled();

    fireEvent.click(getButtonNode());

    expect(onClick).not.toBeCalled();
  });
});
