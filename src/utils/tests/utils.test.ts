import { describe, it, expect } from "vitest";
import { capitalizeFirstLetter } from "../utils";

describe("capitalizeFirstLetterTest tests", () => {
  it("capitalizeFirstLetterTest capitalizes first letter of test", () => {
    const capitalizeFirstLetterTest = capitalizeFirstLetter("test");
    expect(capitalizeFirstLetterTest).toBe("Test");
  });

  it("should keep the first letter capitalized when it already is", () => {
    const result = capitalizeFirstLetter("Word");
    expect(result).toBe("Word");
  });

  it("should return the same letter if the word is only one character", () => {
    const result = capitalizeFirstLetter("a");
    expect(result).toBe("A");
  });

  it("should handle an empty string without error", () => {
    const result = capitalizeFirstLetter("");
    expect(result).toBe("");
  });

  it("should handle special characters correctly", () => {
    const result = capitalizeFirstLetter("$word");
    expect(result).toBe("$word");
  });
});
