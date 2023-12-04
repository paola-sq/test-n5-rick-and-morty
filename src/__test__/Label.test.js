import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import Label from "../components/Label";

describe("Label component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Label text="Hello world"/>);
    const labelText = getByText("Hello world");
    expect(labelText).toBeInTheDocument();
  });

  it("displays correct text", () => {
    const text = "Example Text";
    const { getByText } = render(<Label text={text} />);
    const labelText = getByText(text);
    expect(labelText).toBeInTheDocument();
  });

  it("has correct styling", () => {
    const text = "Styling Test";
    const { getByText } = render(<Label text={text} />);
    const labelText = getByText(text);

    expect(labelText).toHaveStyleRule("font-size", "12px");
    expect(labelText).toHaveStyleRule("color", "#aaa");
    expect(labelText).toHaveStyleRule("padding", "2px 4px");
  });
});
