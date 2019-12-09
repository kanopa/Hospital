import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  Id_Card: number;
  Id_Patient: number;
  Id_Doctor: number;
  Diagnos: string;
  Appointment_length: number;
}

@NgModule({
  imports: [MatSort, MatTableDataSource]
})

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.sass']
})
export class PatientComponent implements OnInit {

  ElementData: PeriodicElement[] = [
    {Id_Card: 1, Id_Patient: 1, Id_Doctor: 1, Diagnos: 'Suka', Appointment_length: 40},
    {Id_Card: 2, Id_Patient: 1, Id_Doctor: 1, Diagnos: 'Tvar', Appointment_length: 50},
    {Id_Card: 3, Id_Patient: 1, Id_Doctor: 1, Diagnos: 'Mraz', Appointment_length: 20},
    {Id_Card: 4, Id_Patient: 2, Id_Doctor: 3, Diagnos: 'healthy', Appointment_length: 10},
    {Id_Card: 5, Id_Patient: 3, Id_Doctor: 4, Diagnos: 'healthy', Appointment_length: 10},
  ];
  displayedColumns: string[] = ['Id Card', 'Id Patient', 'Id Doctor', 'Diagnos', 'Appointment Length'];
  dataSource = new MatTableDataSource(this.ElementData);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
