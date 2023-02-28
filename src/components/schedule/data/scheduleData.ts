import type { ITableHeader } from "../types";

const tableHeaders: ITableHeader[] = [
  {
    id: 1,
    label: "Opponent",
  },
  {
    id: 2,
    label: "Location",
  },
  {
    id: 3,
    label: "Date",
  },
  {
    id: 4,
    label: "Time",
  },
];

const filters = [
  {
    id: 1,
    label: "Varsity",
    isSelected: true,
  },
  {
    id: 2,
    label: "Junior Varsity",
    isSelected: false,
  },
  {
    id: 3,
    label: "Bantam",
    isSelected: false,
  },
];

export default {
  tableHeaders,
  filters,
};
