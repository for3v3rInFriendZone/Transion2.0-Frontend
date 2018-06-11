import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'invoice',
    templateUrl: './invoice.component.html',
    styles: [require('./invoice.component.css').toString()],
})

export class InvoiceComponent implements OnInit {
    //#region Public members

    //#endregion

    invoiceForm: FormGroup;

    constructor(private router: Router, private fb: FormBuilder) { }

    ngOnInit() {

    }

    //#region Public methods

    //#endregion

    //#region Private methods

    //#endregion

}