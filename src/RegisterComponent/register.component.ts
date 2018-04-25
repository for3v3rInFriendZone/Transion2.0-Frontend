import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegister } from './userRegister';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styles: [require('./register.component.css').toString()],
})

export class RegisterComponent implements OnInit {

    step1: boolean;
    step2: boolean;
    step3: boolean;
    registrationForm: FormGroup;

    constructor(private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;

        this.registrationForm = this.fb.group({
            email: [null, Validators.compose([Validators.required, Validators.email])],
            password: [null, Validators.compose([Validators.required, Validators.minLength(2),
                Validators.maxLength(15)])],
            confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(2),
                Validators.maxLength(15)])],
            country:  [null, Validators.required],
            zipCode:  [null, Validators.required],
            firstName: [null, Validators.required],
            parentsName: [null, Validators.required],
            lastName: [null, Validators.required],
            citizenship: [null, Validators.required],
            jmbg: [null, Validators.compose([Validators.required, Validators.maxLength(13), Validators.minLength(13)])],
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
    }

    toStepTwo() {
        this.step1 = false;
        this.step2 = true;
    }

    toStepThree() {
        this.step2 = false;
        this.step3 = true;
    }

    confirmRegistration(frm: any) {
        var userRegisterObject = new UserRegister(
            frm.value.email,
            frm.value.password,
            frm.value.country,
            frm.value.zipCode,
            frm.value.firstName,
            frm.value.parentsname,
            frm.value.lastName,
            frm.value.citizenship,
            frm.value.jmbg,
            frm.value.qualifications,
            frm.value.gender,
            frm.value.city,
            frm.value.streetName,
            frm.value.streetNumber
        );
        console.log(userRegisterObject);
    }

    goBack() {
        if (this.step1) {
            this.router.navigate(['']);
        } else if (this.step2) {
            this.step1 = false;
            this.step2 = true;
        } else {
            this.step2 = false;
            this.step3 = true;
        }
    }
}