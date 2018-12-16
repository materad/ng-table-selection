import { Injectable } from '@angular/core';
import { Table } from '../model/model';
import { BehaviorSubject, Observable } from 'rxjs';
import { getTable } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: BehaviorSubject<Table> = new BehaviorSubject({
    name: '',
    columns: [],
    rows: []
  });
  public readonly data$: Observable<Table> = this.data.asObservable();
  constructor() {}
  refresh() {
    const table = getTable();
    this.data.next(table);
  }
}
