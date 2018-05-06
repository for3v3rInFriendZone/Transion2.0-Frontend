import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../LoginComponent/token.service';
import { LoginService } from '../LoginComponent/login.service';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styles: [require('./header.component.css').toString()],
    providers: [TokenService, LoginService]
})

export class HeaderComponent implements OnInit {
    userOptionsOff: boolean;
    userOptionsOn: boolean;
    user: any;

    constructor(private router: Router, private tokenService: TokenService, private loginService: LoginService) { } 

    ngOnInit() {
        var decodedToken = this.decodeToken();
        this.getLogedUser(decodedToken.sub);
        this.userOptionsOff = true;
        this.userOptionsOn = false;
     }

    toHomePage() {
        this.router.navigate(['početna']);
    }

    switchUserOptions() {
        if(this.userOptionsOff) {
            this.userOptionsOff = false;
            this.userOptionsOn = true;
        } else {
            this.userOptionsOff = true;
            this.userOptionsOn = false;
        }
    }

    decodeToken() {
        return this.tokenService.getTokenPayload();
    }

    getLogedUser(username: string) {
        this.loginService.getUserByUsername(username)
        .subscribe(result => {
            this.user = result;
        });
    }

    logout() {
        this.loginService.logout();
    }
}