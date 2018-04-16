import { Routes } from "@angular/router";

import { RegisterComponent } from "./RegisterComponent/register.component";
import { LoginComponent } from "./LoginComponent/login.component";
import { HomeComponent } from "./HomeComponent/home.component";
import { AuthGuardService } from "./AuthGuards/auth-guard.service";
import { LoginGuardService } from "./AuthGuards/login-auth-guard.service";


export const routes: Routes = [
    { path: '', component: LoginComponent, canActivate: [LoginGuardService] },
    { path: 'registracija', component: RegisterComponent },
    { path: 'početna', component: HomeComponent, canActivate: [AuthGuardService] },

    { path: '**', redirectTo: ''}
]