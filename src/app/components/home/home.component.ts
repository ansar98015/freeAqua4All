import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  getInTouch(){
    window.open('https://forms.gle/FvLWJmxyqFiu4RgTA', '_blank');
  }

  advertiseHere(){
    this.router.navigate(['advertise'], {
      queryParams: {from: 'home-comp', to: 'advertise-comp' }
    })
  }
}
