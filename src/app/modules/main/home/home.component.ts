import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../common/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styles: []
})
export class HomeComponent implements OnInit {
  active:string;
  constructor(private router: Router, private authService: AuthService) { 

    // Detect route changes for active sidebar menu
 		this.router.events.subscribe((val) => {
      this.routeChanged(val);
    });
  }

  ngOnInit() {
    
  }

  routeChanged(val){
    this.active = val.url;
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
