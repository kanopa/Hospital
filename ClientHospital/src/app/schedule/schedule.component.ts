import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { AppointmentService } from '../services/AppointmentService';
import { NewAppointment } from '../models/Appointment';
import { DoctorService } from '../services/DoctorService';
import { Doctor } from '../models/Doctor';

export interface PeriodicElement {
  IdDoctor: number;
  StartAppointment: string;
  EndAppointment: string;
}

@NgModule({
  imports: [MatSort, MatTableDataSource]
})

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})

export class ScheduleComponent implements OnInit {

  appointments: NewAppointment[];
  doctors: Doctor[];
  ElementData: PeriodicElement[] = [];
  displayedColumns: string[] = ['IdDoctor', 'StartAppointment', 'EndAppointment'];
  dataSource = new MatTableDataSource(this.ElementData);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private appService: AppointmentService, private doctorService: DoctorService) { }

  changeClient($event) {
    this.appService.GetAppointmentById($event).subscribe(x => this.Update(x.body));
  }
  ngOnInit() {
    this.doctorService.GetAllDoctors().subscribe( x => {this.doctors = x.body; });
    this.dataSource.sort = this.sort;
    this.appService.GetAppointment().subscribe(x => {
      this.Update(x.body);
    });
  }
  Update(app: NewAppointment[]) {
    this.ElementData = [];
    app.forEach(element => {
      this.ElementData.push({IdDoctor: element.doctorId, StartAppointment: element.start_Appointment.toString(),
      EndAppointment: element.end_Appointment.toString()});
    });
    this.dataSource = new MatTableDataSource(this.ElementData);
  }
}
