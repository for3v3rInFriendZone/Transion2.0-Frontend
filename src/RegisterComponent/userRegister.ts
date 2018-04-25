export class UserRegister {
    constructor(public email: string, public password: string, public country: string, public zipCode: string, 
                public firstname: string, public parentsname: string, public lastname: string, public citizenship: string, 
                public jmbg: string, public qualifications: string, public gender: string, public city: string,
                public streetName: string, public streetNumber: number) {}
}