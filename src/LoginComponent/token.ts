export class Token {
    constructor(public authorities: string[], public exp: Date, public sub: string) {}
}