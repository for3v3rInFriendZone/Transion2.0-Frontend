import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'root',
    templateUrl: './root.component.html',
    styles: [require('./root.component.css').toString()],
})
export class RootComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {

    }
}