import { Component, OnInit, NgModule } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PatientService } from '../services/PatientService';
import { Patient} from '../models/Patient';

@NgModule({
  imports: [MatDatepickerInputEvent, PatientService]
})

@Component({
  selector: 'app-form-record',
  templateUrl: './form-record.component.html',
  styleUrls: ['./form-record.component.sass']
})
export class FormRecordComponent implements OnInit {

  events: string[] = [];
  fullname: string;
  constructor() { }
  ngOnInit() {
  }
  aaaa() {
    console.log(this.fullname);
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
