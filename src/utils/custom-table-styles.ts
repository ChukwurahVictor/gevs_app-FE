import { TableStyles } from "react-data-table-component";

export const customStyles: TableStyles = {
  table: {
    style: {
      height: "fit-content",
    },
  },
  headRow: {
    style: {
      display: "flex",
      gap: "0.5rem",
    },
  },
  headCells: {
    style: {
      letterSpacing: "0.2px",
      fontSize: "14px",
    },
  },
  rows: {
    style: {
      display: "flex",
      gap: "0.5rem",
    },
  },
  cells: {
    style: {
      letterSpacing: "0.2px",
      fontSize: "14px",
      minWidth: "unset",
      textTransform: "capitalize",
    },
  },
};
