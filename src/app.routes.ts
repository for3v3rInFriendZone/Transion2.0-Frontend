import { Routes } from "@angular/router";

import { RegisterComponent } from "./RegisterComponent/register.component";
import { LoginComponent } from "./LoginComponent/login.component";


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'registracija', component: RegisterComponent },

    { path: '**', redirectTo: ''}
]