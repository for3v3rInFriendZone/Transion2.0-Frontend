import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styles: [require('./header.component.css').toString()],
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}