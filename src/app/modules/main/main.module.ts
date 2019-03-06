import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { mainRoute } from '../../shared/app-routes';
import { EquipmentModule } from '../equipment/equipment.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      mainRoute, { enableTracing: false } // <-- debugging purposes only
    )
  ],
  declarations: [
    HomeComponent,
    EquipmentModule
  ]
})
export class MainModule { }
