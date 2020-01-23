export class Amount
{
    value: number;
    currency: string;

    // this constructor is not mandatory in this context, but if at any time one of API or Model changes,
    // then we just have to change the mapping instead of refactoring all files referring to this.
    constructor(amountResponse : any ) {
        this.value = amountResponse.value;
        this.currency = amountResponse.currency;
    }
}