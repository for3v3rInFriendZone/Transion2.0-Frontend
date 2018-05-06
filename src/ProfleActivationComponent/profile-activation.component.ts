import { Component, OnInit } from '@angular/core';
import { ProfileActivationService } from './profile-activation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'profile-activation',
    templateUrl: './profile-activation.component.html',
    styles: [require('./profile-activation.component.css').toString()],
    providers: [ProfileActivationService]
})

export class ProfileActivationComponent implements OnInit {
    id: string;
    linkExpirationDate: number;
    activatedUser: any;
    activationSuccess: boolean;

    constructor(private profileService: ProfileActivationService, private aRouter: ActivatedRoute) { }

    ngOnInit() {
        this.aRouter.params.subscribe( params => {
            this.id = params['userId'];
            this.linkExpirationDate = +params['linkExpirationDate'];
        });

        this.activateAccount(this.id);
    }

    activateAccount(id: string) {
        //check if link has expired.
        var dateNow = new Date().getTime();
        if(dateNow > this.linkExpirationDate) {
            this.activationSuccess = false;
            return;
        }
        this.profileService.confirmRegistration(id)
        .subscribe( result => {
            this.activationSuccess = true; 
            this.activatedUser = result;
        }, 
        err => {
            this.activationSuccess = false;
        }); 
    }
}