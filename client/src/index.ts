import * as _ from 'lodash';

import {ExpensesApiService} from './ExpensesApiService'

let service = new ExpensesApiService();
service.getExpenses(10, 25);
