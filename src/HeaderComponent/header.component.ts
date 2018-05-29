import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../LoginComponent/token.service';
import { LoginService } from '../LoginComponent/login.service';

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html',
    styles: [require('./header.component.css').toString()],
    providers: [TokenService, LoginService]
})

export class HeaderComponent implements OnInit {
    userOptionsOff: boolean;
    userOptionsOn: boolean;
    user: any;
    invoicesNavbar: boolean

    constructor(private router: Router, private tokenService: TokenService, private loginService: LoginService) { } 

    ngOnInit() {
        var decodedToken = this.decodeToken();
        this.getLogedUser(decodedToken.sub);
        this.userOptionsOff = true;
        this.userOptionsOn = false;
        this.invoicesNavbar = false;
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

    isNavActive(name: string): boolean {
        return this.router.url.indexOf(name) !== -1;
    }

    goToInvoices() {
        this.router.navigate(['fakture']);
        this.invoicesNavbar = true;
    }

    logout() {
        this.loginService.logout();
    }
}