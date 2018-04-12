import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { routes } from "./app.routes";

import { RootComponent } from "./RootComponent/root.component";
import { RegisterComponent } from "./RegisterComponent/register.component";
import { LoginComponent } from "./LoginComponent/login.component";
import { FooterComponent } from "./FooterComponent/footer.component";
import { HeaderComponent } from "./HeaderComponent/header.component";

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), 
        MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatSelectModule ],
    declarations: [RootComponent, RegisterComponent, LoginComponent, FooterComponent, HeaderComponent],
    bootstrap: [RootComponent]
})
export class AppModule { } 