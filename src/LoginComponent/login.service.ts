import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { UserLogin } from './userLogin';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    private readonly SERVER: string;
    private token: string;

    constructor(private http: HttpClient, private router: Router) {
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
        this.router.navigate(['/']);
    }

    getUserByUsername(username: string) {
        let params = new HttpParams().set("username", username);
        return this.http.get(this.SERVER + "api/transionUser/findemail", {params: params});
    }
}