import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from './token';

@Injectable()
export class TokenService {

    constructor(private jwtHelper: JwtHelperService) { }

    isAuthenticated(): boolean {
        var result = true;
        var token = localStorage.getItem('token');
        if(this.jwtHelper.isTokenExpired(token)) {
            result = false;
        } else {
            result = true;
        }

        return result;
    }

    getTokenPayload(): Token {
        var token = localStorage.getItem('token');
        return this.jwtHelper.decodeToken(token);
    }
}