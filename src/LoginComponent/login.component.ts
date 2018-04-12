import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: [require('./login.component.css').toString()],
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: [null, Validators.compose([Validators.required, Validators.email])],
            password: [null, Validators.compose([Validators.required, Validators.minLength(2),
                Validators.maxLength(10)])]
        });
    }

    logForm(frm: any) {
        console.log(frm);
        console.log(frm.value);
    }

    toRegisterPage() {
        this.router.navigate(['registracija']);
    }
}