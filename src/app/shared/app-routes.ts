import { Routes } from "@angular/router";
import { EquipmentListComponent } from "../modules/equipment/list/list.component";
import { AuthGuard } from "../modules/auth/auth-guard";
import { LoginComponent } from "../modules/auth/login/login.component";
import { HomeComponent } from "../modules/main/home/home.component";

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate:[AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
    
];

export const mainRoute : Routes = [
    { path: 'equipmentlist',  component: EquipmentListComponent, canActivate:[AuthGuard] }
];

