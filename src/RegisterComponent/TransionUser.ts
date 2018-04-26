import { Address } from "./Address";

export class TransionUser {
    constructor(public firstname: string, public lastname: string, public username: string, public parentsName: string, 
                public citizenship: string, public sex: string, public education: string, public password: string, 
                public jmbg: string, public phoneNumber: number, public authorities: string[], public address: Address) {}
}