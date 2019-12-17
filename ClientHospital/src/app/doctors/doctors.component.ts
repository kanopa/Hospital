import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DoctorService } from '../services/DoctorService';
import { Doctor } from '../models/Doctor';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.sass']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[];
  fullName: string;
  position: string;
  constructor(public dialog: MatDialog, private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.GetAllDoctors().subscribe(x => {this.doctors = x.body;  });
  }
  openDialog() {
    const dialogRef = this.dialog.open(DoctorCardDialog);
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  CreateDoc() {
    const doctor: Doctor = {id: 0, full_Name: this.fullName, doctor_Position: this.position};
    this.doctorService.CreateDoctor(doctor).subscribe(x => { });
  }
}
@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.html',
  styleUrls: ['./doctor-card.sass']
})
// tslint:disable-next-line: component-class-suffix
export class DoctorCardDialog {
}
