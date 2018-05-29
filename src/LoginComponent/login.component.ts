import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
        this.createForm();
    }

    //#region Public methods

    /**
     * Validates and does a login call to server.
     * @param frm FormGroup responsible for creating form.
     */
    login(frm: FormGroup) {
        this.username.markAsTouched();
        this.password.markAsTouched();

        if (this.loginForm.valid) {
            this.loginService.login(new UserLogin(frm.value.username, frm.value.password))
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
    }

    /**
     * Navigates to registration page.
     */
    toRegisterPage() {
        this.router.navigate(['registracija']);
    }

    //#endregion

    //#region Private methods

    /**
     * Creating form for HTML page.
     */
    private createForm() {
        this.loginForm = this.fb.group({
            'username': new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl('', [
                Validators.required,
                Validators.pattern("^[a-zA-Z0-9!@#$%^&*]{2,50}$")
            ])
        });
    }

    //#endregion

    //#region Form groups getters

    //Access any form control through the get method on its parent group, 
    //but sometimes it's useful to define getters as shorthands for the template.
    get username() { return this.loginForm.get('username'); }
    get password() { return this.loginForm.get('password'); }

    //#endregion
}