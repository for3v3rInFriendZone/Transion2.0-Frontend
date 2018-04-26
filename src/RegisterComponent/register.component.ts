import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransionUser } from './TransionUser';
import { RegisterService } from './register.service';
import { MatSnackBar } from '@angular/material';
import { Address } from './Address';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styles: [require('./register.component.css').toString()],
    providers: [RegisterService]
})

export class RegisterComponent implements OnInit {

    step1: boolean;
    step2: boolean;
    step3: boolean;
    passwordsNotEqual: boolean;
    registrationForm: FormGroup;
    authorities: string[];

    constructor(private router: Router, private fb: FormBuilder, private registerService: RegisterService, 
                private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.passwordsNotEqual = false;
        this.authorities = [];
        this.authorities.push("User");

        this.registrationForm = this.fb.group({
            email: [null, Validators.compose([Validators.required, Validators.email])],
            password: [null, Validators.required],
            confirmPassword: [null, Validators.required],
            country:  [null, Validators.required],
            zipCode:  [null, Validators.required],
            firstName: [null, Validators.required],
            parentsName: [null, Validators.required],
            lastName: [null, Validators.required],
            citizenship: [null, Validators.required],
            jmbg: [null, Validators.compose([Validators.required, Validators.maxLength(13), Validators.minLength(13)])],
            phoneNumber: [null, Validators.required],
            qualifications: [null, Validators.required],
            gender: [null, Validators.required],
            city: [null, Validators.required],
            streetName: [null, Validators.required],
            streetNumber: [null, Validators.required]
        });
    }

    toStepOne() {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
    }

    toStepTwo() {
        this.step1 = false;
        this.step2 = true;
        this.step3 = false;
    }

    toStepThree() {
        this.step2 = false;
        this.step3 = true;
        this.step1 = false;
    }

    confirmRegistration(frm: any) {
        var address = new Address (
            frm.value.country,
            frm.value.city,
            frm.value.streetName,
            frm.value.streetNumber,
            frm.value.zipCode);

        var userRegisterObject = new TransionUser(
            frm.value.firstName,
            frm.value.lastName,
            frm.value.email,
            frm.value.parentsname,
            frm.value.citizenship,
            frm.value.gender,
            frm.value.qualifications,
            frm.value.password,
            frm.value.jmbg,
            frm.value.phoneNumber,
            this.authorities,
            address
        );

        this.registerService.register(userRegisterObject)
        .subscribe( result => {
            this.snackBar.open("Email je poslat na vašu adresu", "Molimo Vas da aktivirate Vaš profil.", {
                duration: 2500
            });
            this.router.navigate(['']);
        },
        err => {
            this.snackBar.open("Neuspešna registracija", "Probajte opet.", {
                duration: 2500
            });
        });
    }

    goBack() {
        if (this.step1) {
            this.router.navigate(['']);
        } else if (this.step2) {
            this.toStepOne();
        } else {
            this.toStepTwo();
        }
    }
}