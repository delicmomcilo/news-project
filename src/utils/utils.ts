import { Doc } from "../../types/contentTypes";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const extractRelevantContentInfo = (doc: Doc) => {
  const markup = doc.content.filter((ct) => ct.type === "MARKUP");
  const pictures = doc.content.filter((ct) => ct.type === "PICTURES");
  const markupData = markup[0]?.data;
  const pictureUrl = pictures.length ? pictures[0].files[0].url : "";

  const pictureData = pictures[0]?.files[0];

  return { markupData, pictureUrl, markup, pictures, pictureData };
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
