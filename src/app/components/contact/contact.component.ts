import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getInTouch(){
    window.open('https://forms.gle/FvLWJmxyqFiu4RgTA', '_blank');
  }
  
}
