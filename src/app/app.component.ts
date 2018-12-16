import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'excel-poc';

  constructor(public service: DataService) {}

  ngOnInit() {
    this.service.data$.subscribe(x => {
      console.log(x);
    });
    this.service.refresh();
  }
}
