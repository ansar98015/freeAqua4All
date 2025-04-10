import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  sidebar:boolean = false;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  getInTouch(){
    window.open('https://forms.gle/FvLWJmxyqFiu4RgTA', '_blank');
  }
  
  tabClicked(type:string){
    switch (type) {
      case 'home':
        this.router.navigate(['home'], {
          queryParams: {from: 'header-comp', to: 'home-comp' }
        })
        break;
      case 'adv':
        this.router.navigate(['advertise'], {
          queryParams: {from: 'header-comp', to: 'advertise-comp' }
        })
        break;
      case 'faq':
        this.router.navigate(['faqs'], {
          queryParams: {from: 'header-comp', to: 'faqs-comp' }
        })
        break;
      case 'cont':
        this.router.navigate(['contact'], {
          queryParams: {from: 'header-comp', to: 'contact-comp' }
        })
        break;
      default:
    }
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }
}
