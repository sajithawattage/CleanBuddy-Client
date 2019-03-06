//system imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//application imports
import { AppComponent } from './app.component';
import { appRoutes } from './shared/app-routes';
import { AuthGuard } from './modules/auth/auth-guard';
import { AuthModule } from './modules/auth/auth.module';
import { MainModule } from './modules/main/main.module';
import { AuthService } from './common/auth-service';
import { AppConstants } from './shared/app-constants';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    AuthModule,
    MainModule
  ],
  providers: [AuthGuard, AuthService, AppConstants],
  bootstrap: [AppComponent]
})
export class AppModule { }

