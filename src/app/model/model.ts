export interface Table {
  name: string;
  columns: Column[];
  rows: Row[];
}

export interface Cell {
  value: string;
}

export interface Row {
  cells: Cell[];
}

export interface Column {
  displayName: string;
}
