import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    // {path: '', component: UserComponent },
    {path: 'user', component: UserComponent },
    {path: 'dashboard', component: DashboardComponent }
];
