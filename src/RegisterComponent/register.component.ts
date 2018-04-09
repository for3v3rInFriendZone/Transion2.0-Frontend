import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) { }

    ngOnInit() {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
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
}