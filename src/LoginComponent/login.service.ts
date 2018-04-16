import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserLogin } from './userLogin';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
    private readonly SERVER: string;
    private token: string;

    constructor(private http: HttpClient) {
        this.SERVER = "http://localhost:8080/";
    }

    login(userLogin: UserLogin): Observable<boolean> {
        return this.http.post(this.SERVER + 'login', userLogin, {observe: "response"})
            .map( response => {
                let token = response.headers.get('authorization');
                let responseObject = response.body;
                if(token.length > 0) {
                    localStorage.setItem('token', token);
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('token');
    }
}