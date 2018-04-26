import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TokenService } from './token.service';
import { LoginService } from './login.service';
import { UserLogin } from './userLogin';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: [require('./login.component.css').toString()],
    providers: [LoginService, TokenService, MatSnackBar]
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService,
        private tokenService: TokenService, private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: [null, Validators.compose([Validators.required, Validators.email])],
            password: [null, Validators.compose([Validators.required, Validators.minLength(2),
            Validators.maxLength(10)])]
        });
    }

    login(frm: any) {
        this.loginService.login(new UserLogin(frm.value.email, frm.value.password))
            .subscribe(response => {
                if (response) {
                    this.router.navigate(['početna']);
                }
            },
            err => {
                this.snackBar.open("Neuspešno logovanje", "Probajte opet.", {
                    duration: 2500
                });
            });
    }

    toRegisterPage() {
        this.router.navigate(['registracija']);
    }
}