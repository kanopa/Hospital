import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';

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

  ElementData: PeriodicElement[] = [
    {IdDoctor: 1, StartAppointment: new Date(2019, 12, 13, 12, 10).toLocaleString(),
      EndAppointment: new Date(2019, 12, 12, 13, 10).toLocaleString()},
    {IdDoctor: 2, StartAppointment: new Date(2019, 13, 14, 12, 10).toLocaleString(),
      EndAppointment: new Date(2019, 12, 12, 13, 10).toLocaleString()},
    {IdDoctor: 3, StartAppointment: new Date(2019, 14, 15, 12, 10).toLocaleString(),
      EndAppointment: new Date(2019, 12, 12, 13, 10).toLocaleString()},
    {IdDoctor: 4, StartAppointment: new Date(2019, 15, 16, 12, 10).toLocaleString(),
      EndAppointment: new Date(2019, 12, 12, 13, 10).toLocaleString()},
    {IdDoctor: 5, StartAppointment: new Date(2019, 16, 17, 12, 10).toLocaleString(),
      EndAppointment: new Date(2019, 12, 12, 13, 10).toLocaleString()},
  ];
  displayedColumns: string[] = ['IdDoctor', 'StartAppointment', 'EndAppointment'];
  dataSource = new MatTableDataSource(this.ElementData);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
