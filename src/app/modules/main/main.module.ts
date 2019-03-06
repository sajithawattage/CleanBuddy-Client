import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../shared/app-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: false } // <-- debugging purposes only
    )
  ],
  declarations: [HomeComponent]
})
export class MainModule { }
