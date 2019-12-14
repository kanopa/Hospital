import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.sass']
})
export class DoctorComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DoctorDeleteDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog res: ${result}');
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
