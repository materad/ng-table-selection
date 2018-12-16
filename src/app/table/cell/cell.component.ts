import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import { Cell } from '../../model/model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {
  @Input() rowIndex: number;
  @Input() columnIndex: number;
  @Input() cell: Cell;
  @Output() cellmouseclick: EventEmitter<any> = new EventEmitter();
  @Output() cellmouseenter: EventEmitter<any> = new EventEmitter();
  @Output() cellmousedown: EventEmitter<any> = new EventEmitter();
  selected: boolean;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  onMouseClick() {
    this.cellmouseclick.emit({ row: this.rowIndex, column: this.columnIndex });
  }

  onMouseEnter($event) {
    console.log($event);
    this.cellmouseenter.emit({
      row: this.rowIndex,
      column: this.columnIndex,
      isDragging: $event.buttons === 1
    });
  }
  onMouseDown() {
    this.cellmousedown.emit({ row: this.rowIndex, column: this.columnIndex });
  }

  setSelection(selected: boolean) {
    this.selected = selected;
    this.cd.markForCheck();
  }
}
