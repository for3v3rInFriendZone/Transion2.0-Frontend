import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '../LoginComponent/token.service';

@Injectable()
export class LoginGuardService implements CanActivate {

    constructor(private router: Router, private tokenService: TokenService) { }

    canActivate(): boolean {
        var result = true;
        if(this.tokenService.isAuthenticated()) {
            this.router.navigate(['početna']);
            result = true;
        } 

        return result;
    }
    
}