import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table/table.component';
import { ColumnComponent } from './table/column/column.component';
import { RowComponent } from './table/row/row.component';
import { CellComponent } from './table/cell/cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ColumnComponent,
    RowComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
