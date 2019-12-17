import { Component, OnInit, NgModule } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AppointmentService} from '../services/AppointmentService';
import { Doctor } from '../models/Doctor';
import { DoctorService } from '../services/DoctorService';
import { NewAppointment } from '../models/Appointment';

declare var $: any;

@NgModule({
  imports: [MatDatepickerInputEvent, AppointmentService]
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
  firstDate: Date;
  secondDate: Date;
  doctorId: number;
  constructor(private doctorService: DoctorService, private appointmentService: AppointmentService) { }

  First(date) {
    this.firstDate = date;
  }
  Second(date) {
    this.secondDate = date;
  }
  changeClient($event) {
    this.doctorId = $event;
  }
  ngOnInit() {
    this.doctorService.GetAllDoctors().subscribe( x => {this.doctors = x.body; });
    $('#example1').calendar({
      popupOptions: {
        observeChanges: false
      },
      onChange: (date, text) => this.First(date),
      isDisabled: (date, mode) => {
        console.log(date);
        return false;
      },
    });
    $('#example2').calendar({
      popupOptions: {
        observeChanges: false
      },
      onChange: (date, text) => this.Second(date),
      isDisabled : (date, mode) => false,
    });
  }
  aaaa() {
    const appoint: NewAppointment = {
      full_Name: this.fullname,
      doctorId: this.doctorId,
      start_Appointment: this.firstDate,
      end_Appointment: this.secondDate
    };
    this.appointmentService.CreateAppointment(appoint).subscribe(x => console.log(x));
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
