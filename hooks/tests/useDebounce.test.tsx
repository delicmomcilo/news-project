import React from "react";
import { render, act } from "@testing-library/react";
import { useDebounce } from "../useDebounce";
import { describe, it, expect } from "vitest";

const TestComponent = ({ value, delay }: { value: string; delay?: number }) => {
  const debouncedValue = useDebounce(value, delay);

  return <div>{debouncedValue}</div>;
};

describe("useDebounce hook", () => {
  it("returns the initial value", () => {
    const { container } = render(<TestComponent value="initial value" />);
    expect(container.textContent).toBe("initial value");
  });

  it("updates the value after specified delay", async () => {
    const { rerender, container } = render(<TestComponent value="initial value" delay={500} />);
    rerender(<TestComponent value="updated value" delay={500} />);

    expect(container.textContent).toBe("initial value");

    await act(() => new Promise((resolve) => setTimeout(resolve, 500)));

    expect(container.textContent).toBe("updated value");
  });

  it("clears previous timer when value is updated before delay", async () => {
    const { rerender, container } = render(<TestComponent value="initial value" delay={500} />);
    rerender(<TestComponent value="updated value" delay={500} />);

    expect(container.textContent).toBe("initial value");

    await act(() => new Promise((resolve) => setTimeout(resolve, 300)));
    expect(container.textContent).toBe("initial value");

    rerender(<TestComponent value="second update" delay={500} />);
    await act(() => new Promise((resolve) => setTimeout(resolve, 200)));

    expect(container.textContent).toBe("initial value");

    await act(() => new Promise((resolve) => setTimeout(resolve, 300)));

    expect(container.textContent).toBe("second update");
  });
});
