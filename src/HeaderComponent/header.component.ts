import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styles: [require('./header.component.css').toString()]
})

export class HeaderComponent implements OnInit {
    constructor(private router: Router) { } 

    ngOnInit() { }

    toHomePage() {
        this.router.navigate(['početna']);
    }
}