import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styles: [require('./register.component.css').toString()],
})

export class RegisterComponent implements OnInit {

    step1: boolean;
    step2: boolean;
    step3: boolean;
    step4: boolean;
    registrationForm: FormGroup;

    constructor(private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;

        this.registrationForm = this.fb.group({
            email: [null, Validators.compose([Validators.required, Validators.email])],
            password: [null, Validators.compose([Validators.required, Validators.minLength(2),
                Validators.maxLength(15)])],
            confirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(2),
                Validators.maxLength(15)])],
            nameOfAgency:  [null, Validators.required],
            fullNameOfAgency: [null, Validators.required],
            pib: [null, Validators.required],
            IDNumberOfAgency: [null, Validators.required],
            accountNumber: [null, Validators.required],
            codeoOfActivityWithDescription: [null, Validators.required],
            registerDate: [null, Validators.required],
            companyCityAndZipCode: [null, Validators.required],
            companyStreetName: [null, Validators.required],
            companyStreetNumber: [null, Validators.required],
            companyPhoneNumber: [null, Validators.required],
            companyEmail:  [null, Validators.compose([Validators.required, Validators.email])],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            citizenship: [null, Validators.required],
            jmbg: [null, Validators.required],
            passportNumber: [null, Validators.required],
            qualifications: [null, Validators.required],
            gender: [null, Validators.required],
            workingRelationship: [null, Validators.required],
            city: [null, Validators.required],
            address: [null, Validators.required],
            streetNumberAddress: [null, Validators.required],
            personalEmail:  [null, Validators.compose([Validators.required, Validators.email])]
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

    toStepFour() {
        this.step3 = false;
        this.step4 = true;
    }

    goBack() {
        if (this.step1) {
            this.router.navigate(['']);
        } else if (this.step2) {
            this.toStepOne();
        } else if (this.step3) {
            this.toStepTwo();
        } else {
            this.toStepThree();
        }
    }
}