import * as _ from 'lodash';
import {ExpensesApiService} from './ExpensesApiService'

let service = new ExpensesApiService();
service.getExpenses(10, 25, (expenses, total) => {
    console.log(expenses);
    console.log(total);
});
