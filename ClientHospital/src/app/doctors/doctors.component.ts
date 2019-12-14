import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.sass']
})
export class DoctorsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DoctorCardDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog res: ${result}');
    });
  }
}
@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.html',
  styleUrls: ['./doctor-card.sass']
})
// tslint:disable-next-line: component-class-suffix
export class DoctorCardDialog {}
