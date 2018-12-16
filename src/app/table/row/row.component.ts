import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  AfterViewInit,
  QueryList,
  ViewChildren,
  Output,
  EventEmitter
} from '@angular/core';
import { Cell } from '../../model/model';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit, AfterViewInit {
  @Input() rowIndex: number;
  @Input() cells: Cell[];
  @Output() cellMouseClick: EventEmitter<any> = new EventEmitter();
  @Output() cellMouseEnter: EventEmitter<any> = new EventEmitter();
  @Output() cellMouseDown: EventEmitter<any> = new EventEmitter();
  @ViewChildren(CellComponent) cellChildren: QueryList<CellComponent>;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
