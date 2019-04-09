//modules
import { Routes } from "@angular/router";

//components
import { LoginComponent } from "../../components/login/login.component";
import { HomeComponent } from "../../components/home/home.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { AuthGuard } from "./auth-guard";
import { EquipmentListComponent } from "../../components/equipment/list/equipment-list/equipment-list.component";
import { EquipmentManageComponent } from "../../components/equipment/manage/equipment-manage/equipment-manage.component";
import { EquipmentDetailComponent } from "../../components/equipment/detail/equipment-detail/equipment-detail.component";

// Parent Routes
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'equipment',
                component: EquipmentListComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'equipment/add',
                component: EquipmentManageComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'equipment/detail/:id',
                component: EquipmentDetailComponent,
                canActivate: [AuthGuard]
            }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
