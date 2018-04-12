import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

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
        if(this.step1) {
            this.router.navigate(['']);
        } else if(this.step2) {
            this.toStepOne();
        } else if(this.step3){
            this.toStepTwo();
        } else {
            this.toStepThree();
        }
    }
}