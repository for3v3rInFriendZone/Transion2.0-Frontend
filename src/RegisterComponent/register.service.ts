import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransionUser } from './TransionUser';

@Injectable()
export class RegisterService {
    private readonly SERVER: string;

    constructor(private http: HttpClient) { 
        this.SERVER = "http://localhost:8080/";
    }

    register(newUser: TransionUser) {
        return this.http.post(this.SERVER + "api/transionUser", newUser);
    }

    sendConfirmationEmail(newUser: any) {
        return this.http.post(this.SERVER + "api/transionUser/email", newUser);
    }
    
}