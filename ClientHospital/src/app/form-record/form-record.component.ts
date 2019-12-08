import { Component, OnInit, NgModule } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@NgModule({
  imports: [MatDatepickerInputEvent]
})

@Component({
  selector: 'app-form-record',
  templateUrl: './form-record.component.html',
  styleUrls: ['./form-record.component.sass']
})
export class FormRecordComponent implements OnInit {

  events: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(event.value);
  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }
}
