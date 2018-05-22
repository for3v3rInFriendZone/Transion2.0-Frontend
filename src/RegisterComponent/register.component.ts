import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { TransionUser } from './TransionUser';
import { RegisterService } from './register.service';
import { MatSnackBar } from '@angular/material';
import { Address } from './Address';
import { Agency } from './Agency';
import { PasswordValidation } from './Validators/PasswordValidation ';

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
    step4: boolean;
    registrationFormStep1: FormGroup;
    registrationFormStep2: FormGroup;
    registrationFormStep3: FormGroup;
    registrationFormStep4: FormGroup;
    authorities: string[];

    constructor(private router: Router, private fb: FormBuilder, private registerService: RegisterService,
        private snackBar: MatSnackBar) { }

    ngOnInit() {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.authorities = [];
        this.authorities.push("User");

        this.createForm();
    }

    //#region Public methods

    toStepOne() {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
    }

    toStepTwo() {
        this.markAsTouchedFormGroup1();

        if (this.registrationFormStep1.valid) {
            this.step1 = false;
            this.step2 = true;
            this.step3 = false;
            this.step4 = false;
        }
    }

    toStepThree() {
        this.markAsTouchedFormGroup2();

        if (this.registrationFormStep2.valid) {
            this.step2 = false;
            this.step3 = true;
            this.step1 = false;
            this.step4 = false;
        }
    }

    toStepFour() {
        this.markAsTouchedFormGroup3();

        if (this.registrationFormStep3.valid) {
            this.step4 = true;
            this.step2 = false;
            this.step3 = false;
            this.step1 = false;
        }
    }

    confirmRegistration() {
        this.markAsTouchedFormGroup4();
        if (this.registrationFormStep4.invalid) {
            return;
        }
        var userRegisterObject = this.createTransionUser();

        this.registerService.register(userRegisterObject)
            .subscribe(result => {
                this.snackBar.open("Email je poslat na vašu adresu", "Molimo Vas da aktivirate Vaš profil.", {
                    duration: 3500
                });
                this.router.navigate(['']);
            },
                err => {
                    this.snackBar.open("Neuspešna registracija", "Probajte opet.", {
                        duration: 3500
                    });
                });
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

    //#endregion

    //#region Private methods

    /**
    * Private method for gathering all methods for forms creation.
    */
    private createForm() {
        this.createForm1();
        this.createForm2();
        this.createForm3();
        this.createForm4();
    }

    /**
     *  Registration form 1 initialisation.
     */
    private createForm1() {

        this.registrationFormStep1 = this.fb.group({
            'email': new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            'password': new FormControl('', [
                Validators.required,
                Validators.pattern("^[a-zA-Z0-9!@#$%^&*]{2,50}$")
            ]),
            'confirmPassword': new FormControl('', [
                Validators.required
            ])
        },
            {
                validator: PasswordValidation.MatchPassword
            });
    }

    /**
    * Registration form 2 initialisation.
    */
    private createForm2() {
        this.registrationFormStep2 = this.fb.group({
            'firstName': new FormControl('', [
                Validators.required
            ]),
            'parentsName': new FormControl('', [
                Validators.required
            ]),
            'lastName': new FormControl('', [
                Validators.required
            ]),
            'citizenship': new FormControl('', [
                Validators.required
            ]),
            'jmbg': new FormControl('', [
                Validators.required,
                Validators.pattern("^[0-9]{13}$")
            ]),
            'phoneNumber': new FormControl('', [
                Validators.required
            ]),
            'qualifications': new FormControl('', [
                Validators.required
            ]),
            'gender': new FormControl('', [
                Validators.required
            ])
        });
    }

    /**
     * Registration form 3 initialisation.
     */
    private createForm3() {
        this.registrationFormStep3 = this.fb.group({
            'city': new FormControl('', [
                Validators.required
            ]),
            'streetName': new FormControl('', [
                Validators.required
            ]),
            'streetNumber': new FormControl('', [
                Validators.required
            ]),
            'country': new FormControl('', [
                Validators.required
            ]),
            'zipCode': new FormControl('', [
                Validators.required
            ])
        });
    }

    /**
     * Registration form 4 initialisation.
     */
    private createForm4() {
        this.registrationFormStep4 = this.fb.group({
            'agencyName': new FormControl('', [
                Validators.required
            ]),
            'agencyFullName': new FormControl('', [
                Validators.required
            ]),
            'agencyPib': new FormControl('', [
                Validators.required
            ]),
            'agencyUniqueKey': new FormControl('', [
                Validators.required
            ]),
            'agencyAccountNumber': new FormControl('', [
                Validators.required
            ]),
            'agencyActivityCodeWithDescription': new FormControl('', [
                Validators.required
            ]),
            'agencyRegistrationDate': new FormControl('', [
                Validators.required
            ]),
            'agencyCity': new FormControl('', [
                Validators.required
            ]),
            'agencyStreetName': new FormControl('', [
                Validators.required
            ]),
            'agencyStreetNumber': new FormControl('', [
                Validators.required
            ]),
            'agencyCityZipCode': new FormControl('', [
                Validators.required
            ]),
            'agencyPhoneNumber': new FormControl('', [
                Validators.required
            ]),
            'agencyEmail': new FormControl('', [
                Validators.required,
                Validators.email
            ])
        });
    }

    /**
    * Setting form group 1 to be marked as touched when next button is clicked.
    */
    private markAsTouchedFormGroup1() {
        this.registrationFormStep1.get('email').markAsTouched();
        this.registrationFormStep1.get('password').markAsTouched();
        this.registrationFormStep1.get('confirmPassword').markAsTouched();
    }

    /**
     * Setting form group 2 to be marked as touched when next button is clicked.
     */
    private markAsTouchedFormGroup2() {
        this.registrationFormStep2.get('firstName').markAsTouched();
        this.registrationFormStep2.get('parentsName').markAsTouched();
        this.registrationFormStep2.get('lastName').markAsTouched();
        this.registrationFormStep2.get('citizenship').markAsTouched();
        this.registrationFormStep2.get('jmbg').markAsTouched();
        this.registrationFormStep2.get('phoneNumber').markAsTouched();
        this.registrationFormStep2.get('qualifications').markAsTouched();
        this.registrationFormStep2.get('gender').markAsTouched();
    }

    /**
     * Setting form group 3 to be marked as touched when next button is clicked.
     */
    private markAsTouchedFormGroup3() {
        this.registrationFormStep3.get('city').markAsTouched();
        this.registrationFormStep3.get('streetName').markAsTouched();
        this.registrationFormStep3.get('streetNumber').markAsTouched();
        this.registrationFormStep3.get('country').markAsTouched();
        this.registrationFormStep3.get('zipCode').markAsTouched();
    }

    /**
     * Setting form group 4 to be marked as touched when next button is clicked.
     */
    private markAsTouchedFormGroup4() {
        this.registrationFormStep4.get('agencyName').markAsTouched();
        this.registrationFormStep4.get('agencyFullName').markAsTouched();
        this.registrationFormStep4.get('agencyPib').markAsTouched();
        this.registrationFormStep4.get('agencyUniqueKey').markAsTouched();
        this.registrationFormStep4.get('agencyAccountNumber').markAsTouched();
        this.registrationFormStep4.get('agencyActivityCodeWithDescription').markAsTouched();
        this.registrationFormStep4.get('agencyRegistrationDate').markAsTouched();
        this.registrationFormStep4.get('agencyCity').markAsTouched();
        this.registrationFormStep4.get('agencyStreetName').markAsTouched();
        this.registrationFormStep4.get('agencyStreetNumber').markAsTouched();
        this.registrationFormStep4.get('agencyCityZipCode').markAsTouched();
        this.registrationFormStep4.get('agencyPhoneNumber').markAsTouched();
        this.registrationFormStep4.get('agencyEmail').markAsTouched();
    }

    /**
     * Creating user's Address entity.
     * 
     */
    private createUserAddress(): Address {
        return new Address(
            this.country.value,
            this.city.value,
            this.streetName.value, 
            this.streetNumber.value,
            this.zipCode.value, 
        );
    }

    /**
     * Creating Agency entity.
     * 
     */
    private createAgency(): Agency {
        return new Agency(
            this.agencyName.value,
            this.agencyFullName.value, 
            this.agencyPib.value, 
            this.agencyUniqueKey.value, 
            this.agencyAccountNumber.value,
            this.agencyActivityCodeWithDescription.value, 
            this.agencyRegistrationDate.value,
            this.createAgencyAddress(),
            this.agencyAccountNumber.value,
            this.agencyEmail.value,
        );
    }

    /**
     * Creating Address entity for the agency.
     * 
     */
    private createAgencyAddress(): Address {
        return new Address(
            this.country.value,
            this.agencyCity.value,
            this.agencyStreetName.value,
            this.agencyStreetNumber.value,
            this.agencyCityZipCode.value, 
        )
    }

    /**
     * Creating TransionUser entity.
     * 
     */
    private createTransionUser(): TransionUser {
        return new TransionUser(
            this.firstName.value,
            this.lastName.value,
            this.email.value,
            this.parentsName.value, 
            this.citizenship.value, 
            this.gender.value, 
            this.qualifications.value,
            this.password.value,
            this.jmbg.value,
            this.phoneNumber.value,
            this.authorities,
            this.createUserAddress(),
            this.createAgency()
        )
    }

    //#endregion

    //#region Form groups getters

    //Access any form control through the get method on its parent group

    //step1 form groups
    get email() { return this.registrationFormStep1.get('email'); }
    get password() { return this.registrationFormStep1.get('password'); }
    get confirmPassword() { return this.registrationFormStep1.get('confirmPassword'); }

    //step2 form groups
    get firstName() { return this.registrationFormStep2.get('firstName'); }
    get parentsName() { return this.registrationFormStep2.get('parentsName'); }
    get lastName() { return this.registrationFormStep2.get('lastName'); }
    get citizenship() { return this.registrationFormStep2.get('citizenship'); }
    get jmbg() { return this.registrationFormStep2.get('jmbg'); }
    get phoneNumber() { return this.registrationFormStep2.get('phoneNumber'); }
    get qualifications() { return this.registrationFormStep2.get('qualifications'); }
    get gender() { return this.registrationFormStep2.get('gender'); }

    //step3 form groups
    get city() { return this.registrationFormStep3.get('city'); }
    get streetName() { return this.registrationFormStep3.get('streetName'); }
    get streetNumber() { return this.registrationFormStep3.get('streetNumber'); }
    get country() { return this.registrationFormStep3.get('country'); }
    get zipCode() { return this.registrationFormStep3.get('zipCode'); }

    //step4 form groups
    get agencyName() { return this.registrationFormStep4.get('agencyName'); }
    get agencyFullName() { return this.registrationFormStep4.get('agencyFullName'); }
    get agencyPib() { return this.registrationFormStep4.get('agencyPib'); }
    get agencyUniqueKey() { return this.registrationFormStep4.get('agencyUniqueKey'); }
    get agencyAccountNumber() { return this.registrationFormStep4.get('agencyAccountNumber'); }
    get agencyActivityCodeWithDescription() { return this.registrationFormStep4.get('agencyActivityCodeWithDescription'); }
    get agencyRegistrationDate() { return this.registrationFormStep4.get('agencyRegistrationDate'); }
    get agencyCity() { return this.registrationFormStep4.get('agencyCity'); }
    get agencyStreetName() { return this.registrationFormStep4.get('agencyStreetName'); }
    get agencyStreetNumber() { return this.registrationFormStep4.get('agencyStreetNumber'); }
    get agencyCityZipCode() { return this.registrationFormStep4.get('agencyCityZipCode'); }
    get genagencyCityder() { return this.registrationFormStep4.get('agencyCity'); }
    get agencyPhoneNumber() { return this.registrationFormStep4.get('agencyPhoneNumber'); }
    get agencyEmail() { return this.registrationFormStep4.get('agencyEmail'); }

    //#endregion
}