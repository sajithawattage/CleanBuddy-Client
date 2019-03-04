import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../common/auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styles: []
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
