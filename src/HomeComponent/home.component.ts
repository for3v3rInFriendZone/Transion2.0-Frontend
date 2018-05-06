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
    }
}