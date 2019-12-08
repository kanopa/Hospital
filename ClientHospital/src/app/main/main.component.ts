import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  img1 = '/assets/slider/doctor.jpg';
  img2 = '/assets/slider/doctor2.jpg';
  img3 = '/assets/slider/doctor3.jpg';
  img4 = '/assets/slider/Hospital.jpg';
  img5 = '/assets/slider/house.jpg';
  images = [this.img3, this.img5, this.img1, this.img4, this.img2];

  constructor() { }

  ngOnInit() {
  }

}
