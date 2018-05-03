import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'root',
    templateUrl: './root.component.html',
    styles: [require('./root.component.css').toString()],
})
export class RootComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void {

    }
}