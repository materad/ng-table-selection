import { Table, Column, Row } from './model';
import * as faker from 'faker';

export const getTable = (): Table => {
  return {
    name: faker.commerce.productName(),
    columns: columns,
    rows: rows()
  };
};

const columns: Column[] = Array.from({ length: 8 }).map(() => {
  return { displayName: faker.hacker.abbreviation() };
});

const rows = (): Row[] =>
  Array.from({ length: 200 }).map(() => {
    return {
      cells: Array.from({ length: 8 }).map(() => {
        return { value: faker.finance.amount() };
      })
    };
  });
