import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { Table } from '../../model/model';
import { RowComponent } from '../row/row.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() table: Table;
  @ViewChildren(RowComponent) rows: QueryList<RowComponent>;
  affectedCells = {};
  firstSelection: any = {};
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  cellMouseClick($event) {
    this.clearSelection();
    this.selectCells({ [$event.row]: [$event.column] });
  }

  cellMouseEnter($event) {
    if (!$event.isDragging) {
      return;
    }
    this.clearSelection();

    const columnToFill = Math.max(this.firstSelection.column, $event.column);
    const startingColumn = Math.min(this.firstSelection.column, $event.column);

    const rowToFill = Math.max(this.firstSelection.row, $event.row);
    const startingRow = Math.min(this.firstSelection.row, $event.row);

    const toSelect = {};
    Array.from(
      { length: rowToFill - startingRow + 1 },
      (v, k) => k + startingRow
    ).forEach(row => {
      toSelect[row] = Array.from(
        { length: columnToFill - startingColumn + 1 },
        (v, k) => k + startingColumn
      );
    });
    this.selectCells(toSelect);
  }

  cellMouseDown($event) {
    this.clearSelection();
    this.selectCells({ [$event.row]: [$event.column] });
    this.firstSelection = $event;
  }

  selectCells(cells: {}) {
    if (!cells || Object.keys(cells).length === 0) {
      return;
    }
    const rows = this.rows.toArray();
    Object.keys(cells).forEach(rowIndex => {
      const row: RowComponent = rows[rowIndex];
      const childCells = row.cellChildren.toArray();
      cells[rowIndex].forEach(c => {
        childCells[c].setSelection(true);
        if (this.affectedCells[rowIndex]) {
          this.affectedCells[rowIndex].push(c);
        } else {
          this.affectedCells[rowIndex] = [c];
        }
      });
    });
  }

  clearSelection() {
    this.clearSelectionFromArray(this.affectedCells);
    this.affectedCells = {};
  }

  clearSelectionFromArray(cells) {
    if (!cells || Object.keys(cells).length === 0) {
      return;
    }
    const rows = this.rows.toArray();
    Object.keys(cells).forEach(rowIndex => {
      const row: RowComponent = rows[rowIndex];
      const childCells = row.cellChildren.toArray();
      cells[rowIndex].forEach(c => {
        childCells[c].setSelection(false);
      });
    });
  }
}
