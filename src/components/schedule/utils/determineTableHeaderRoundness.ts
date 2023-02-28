import type { ITableHeader } from "../types";

export const determineTableHeaderRoundness = (index: number, data: ITableHeader[]) => {
  if (index === 0) {
    return "px-6 py-4 rounded-tl-lg";
  } else if (index === data.length - 1) {
    return "px-6 py-4 rounded-tr-lg";
  } else {
    return "px-6 py-4";
  }
};
