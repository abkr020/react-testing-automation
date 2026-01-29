import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegisterDriver from "./RegisterDriver";

describe("RegisterDriver - First Name Input", () => {
  test("firstName input exists with correct attributes", () => {
    render(<RegisterDriver />);

    const firstNameInput = screen.getByRole("textbox", {
      name: /first name/i,
    });

    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute("type", "text");
    expect(firstNameInput).toHaveAttribute("name", "firstName");
  });

  test("allows typing only alphabets", () => {
    render(<RegisterDriver />);

    const firstNameInput = screen.getByRole("textbox", {
      name: /first name/i,
    });

    fireEvent.change(firstNameInput, {
      target: { value: "Abhishek" },
    });

    expect(firstNameInput.value).toBe("Abhishek");
  });

  test("does NOT allow numbers", () => {
    render(<RegisterDriver />);

    const firstNameInput = screen.getByRole("textbox", {
      name: /first name/i,
    });

    fireEvent.change(firstNameInput, {
      target: { value: "Abhi123" },
    });

    // Expect numbers to be stripped or rejected
    expect(firstNameInput.value).toBe("Abhi");
  });

  test("does NOT allow special characters", () => {
    render(<RegisterDriver />);

    const firstNameInput = screen.getByRole("textbox", {
      name: /first name/i,
    });

    fireEvent.change(firstNameInput, {
      target: { value: "Abhi@#$" },
    });

    expect(firstNameInput.value).toBe("Abhi");
  });
});
