import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { CalendarModule } from 'primeng/calendar';

//components
import { AppComponent } from './components/index/app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EquipmentListComponent } from './components/equipment/list/equipment-list/equipment-list.component';
import { EquipmentManageComponent } from './components/equipment/manage/equipment-manage/equipment-manage.component';
import { EquipmentDetailComponent } from './components/equipment/detail/equipment-detail/equipment-detail.component';
import { MenuPartialComponent } from './components/partial/menu-partial/menu-partial.component';
import { CommonTaskComponent } from './components/partial/common-task/common-task.component';
import { DatepickerComponent } from './components/partial/datepicker/datepicker.component';

//common
import { routes } from './common/config/app-routes';
import { AppConstants } from './common/constant/app-constants';
import { AuthGuard } from './common/config/auth-guard';

//services
import { AuthService } from './services/auth/auth-service';
import { EquipmentService } from './services/equipment-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    EquipmentListComponent,
    EquipmentManageComponent,
    EquipmentDetailComponent,
    MenuPartialComponent,
    CommonTaskComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    CalendarModule
  ],
  providers: [AuthGuard, AuthService, AppConstants, EquipmentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
