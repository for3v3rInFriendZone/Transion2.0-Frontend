import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenService } from '../LoginComponent/token.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private tokenService: TokenService) { }

    canActivate(): boolean {
        var result = true;
        if (!this.tokenService.isAuthenticated()) {
            this.router.navigate(['']); 
            result = false;
        }

        return result;
    }
}