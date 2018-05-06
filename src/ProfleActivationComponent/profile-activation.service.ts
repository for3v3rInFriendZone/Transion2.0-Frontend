import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProfileActivationService {
    constructor(private httpClient: HttpClient) { }
    
    confirmRegistration(id: string) {
        return this.httpClient.get('http://localhost:8080/api/transionUser/activateAccount/' + id);
    }
}