import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "HOME PAGE"
    },
    {
        path:'details/:id',
        component:DetailsComponent,
        title: "HOUSE DETAILS"
    }
];
