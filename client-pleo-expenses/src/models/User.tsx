export class User
{
    first: string;
    last: string;
    email: string;

    // this constructor is not mandatory in this context, but if at any time one of API or Model changes,
    // then we just have to change the mapping instead of refactoring all files referring to this.
    constructor(userResponse: any)
    {
        this.first = userResponse.first;
        this.last = userResponse.last;
        this.email = userResponse.email;
    }
}