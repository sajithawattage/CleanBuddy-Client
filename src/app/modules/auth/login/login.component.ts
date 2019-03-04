import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../common/auth-service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styles: []
  //styleUrls: ['./sign-in.component.css']  
})
export class LoginComponent implements OnInit {

  isLoginError: boolean = false;
  model : any = {
    UserName: 'Sample User',
    Password: 'aaaa'
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
     this.authService.userAuthentication(this.model.UserName,this.model.Password).subscribe((data : any) => {
       localStorage.setItem('userToken',data.access_token);
       this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}

