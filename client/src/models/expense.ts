import './amount';
import './user';

class Expense
{
    id : string;
    amount : Amount;
    date: Date;
    merchant: string;
    receipts: any[];
    comment: string;
    category: string;
    user: User;
    index: number;
}
