import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles: [require('./home.component.css').toString()],
})

export class HomeComponent implements OnInit {
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get("http://localhost:8080/api/transionUser")
        .subscribe( data => {
            var users = data;
            console.log(users);
        });
    }
}