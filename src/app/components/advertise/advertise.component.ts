import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss'],
  standalone: true
})
export class AdvertiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getaQuote(){
    window.open('https://forms.gle/9bdafmHbrnwtWRny7', '_blank');
  }
}
