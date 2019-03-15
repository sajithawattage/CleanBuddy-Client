import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError: boolean = false;
  model : any = {
    UserName: 'sajithawattage',
    Password: 'f68D5h86'
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.userAuthentication(this.model.UserName,this.model.Password).subscribe((data : any) => {
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }

}
