import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterationComponent } from './auth/registeration/registeration.component';
import { ProfileComponent } from './home/profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path:'auth/login',
        component: LoginComponent
    },
    {
        path:'auth/register',
        component: RegisterationComponent
    }
    ,{
        path:'profile',
        component:ProfileComponent
    },{
        path:'logout',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
