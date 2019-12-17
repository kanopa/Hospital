import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Doctor } from '../models/Doctor';
import { DoctorService } from '../services/DoctorService';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.sass']
})
export class DoctorComponent implements OnInit {
  @Input() doctor: Doctor;
  constructor(public dialog: MatDialog,  private doctorService: DoctorService) { }

  ngOnInit() {

  }
  openDialog() {
    const dialogRef = this.dialog.open(DoctorDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.doctorService.DeleteDoctor(this.doctor.id).subscribe(x => x);
      }

    });
  }
}
@Component({
  selector: 'app-doctor-delete',
  templateUrl: './doctor-delete.html',
  styleUrls: ['./doctor-delete.sass']
})
// tslint:disable-next-line: component-class-suffix
export class DoctorDeleteDialog {}
