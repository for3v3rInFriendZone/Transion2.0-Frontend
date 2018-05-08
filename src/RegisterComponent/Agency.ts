import { Address } from "./Address";

export class Agency {
    constructor(public name: string, public fullName: string, public pib: string, public uniqueKey: string, 
                public accountNumber: string, public activityCode: string, public registrationDate: Date,
                public address: Address, public phone: string, public email: string) {}
}