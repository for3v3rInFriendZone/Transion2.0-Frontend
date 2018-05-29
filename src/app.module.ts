import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuardService } from "./AuthGuards/auth-guard.service";
import { TokenService } from "./LoginComponent/token.service";
import { LoginGuardService } from "./AuthGuards/login-auth-guard.service";
import { TokenInterceptorService } from "./AuthGuards/token-interceptor.service";

import { routes } from "./app.routes";

import { RootComponent } from "./RootComponent/root.component";
import { RegisterComponent } from "./RegisterComponent/register.component";
import { LoginComponent } from "./LoginComponent/login.component";
import { FooterComponent } from "./FooterComponent/footer.component";
import { HeaderComponent } from "./HeaderComponent/header.component";
import { HomeComponent } from "./HomeComponent/home.component";
import { ProfileActivationComponent } from "./ProfleActivationComponent/profile-activation.component";
import { InvoiceComponent } from "./InvoiceComponent/inovice.component";

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(routes),
        MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatDatepickerModule,
        MatNativeDateModule, MatSnackBarModule, MatCardModule, JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
                whitelistedDomains: ['localhost:8080']
            }
        })],
    declarations: [RootComponent, RegisterComponent, LoginComponent, FooterComponent, HeaderComponent, HomeComponent, 
                   ProfileActivationComponent, InvoiceComponent],
    providers: [AuthGuardService, TokenService, LoginGuardService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
    bootstrap: [RootComponent]
})
export class AppModule { } 