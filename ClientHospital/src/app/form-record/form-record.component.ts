import { Component, OnInit, NgModule } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PatientService } from '../services/AppointmentService';
import { Doctor } from '../models/Doctor';
import { DoctorService } from '../services/DoctorService';

declare var $: any;

@NgModule({
  imports: [MatDatepickerInputEvent, PatientService]
})

@Component({
  selector: 'app-form-record',
  templateUrl: './form-record.component.html',
  styleUrls: ['./form-record.component.sass']
})
export class FormRecordComponent implements OnInit {

  doctors: Doctor[];
  events: string[] = [];
  fullname: string;
  constructor(private doctorService: DoctorService) { }
  ngOnInit() {
    this.doctorService.GetAllDoctors().subscribe( x => {this.doctors = x.body; });
    $('#example1').calendar();
    $('#example2').calendar();
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
