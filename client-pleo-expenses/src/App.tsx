// @ts-ignore
import React from 'react';
import './App.css';
import {ExpensesList} from "./components/ExpensesList";
import {NavBar} from './components/NavBar';
import {ExpensesFilter} from "./components/utils/ExpensesFilter";
import {Expense} from "./models/Expense";
import * as _ from 'lodash'
import {ExpensesApiService} from "./ExpensesApiService";
import {ModalExpenses} from "./components/modals/ModalExpenses";
import {ModalType} from "./components/utils/ModalType";

export default class App extends React.Component<IPropTypes, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            expenses: [],
            filter: App.getDefaultFilter(),
            currentModalType : ModalType.none,
            expenseBeingEdited : {},
            imageForModal : undefined
        };
    }

    componentDidMount(): void {
        new ExpensesApiService().getExpenses(25, 0)
            .then((res) =>
            {
                this.setState((prevState) => {
                    let copyState = {...prevState};
                    copyState.expenses = res.expenses;
                    return copyState
                });
            })
    }

    render() {
        const state = this.state;
        return (
            <React.Fragment>
                <NavBar onFilterChanged={this.onFilterChanged} filter={state.filter}/>
                <ModalExpenses handleClose={this.handleClosedModal}
                               onChangeTempData={this.onChangeModalTempData}
                               show={state.showModal}
                               toggle={this.toggleModal}
                               type={state.currentModalType}
                               data={this.getDataForModal()}/>
                <main className="container">
                    <ExpensesList expenses={this.getSortedExpenses({...state.expenses}, state.filter)}
                                  onModalPrompt={this.openModal}/>
                </main>
            </React.Fragment>
        );
    };

    onChangeModalTempData = (data: any) =>
    {
        this.setState((prevState) =>
        {
            let copyState = {...prevState};
            switch (this.state.currentModalType)
            {
                case ModalType.uploadImage:
                    copyState.expenseBeingEdited.receipts[0] = data;
                    break;
                case ModalType.comment:
                    copyState.expenseBeingEdited.comment = data;
                    break;
                default:
                    break;
            }
            return copyState;
        });
    };

    onFilterChanged = (filter: ExpensesFilter) =>
    {
        console.log(`Filter changed for ${filter}!`);
        this.setState((prevState) =>
        {
            let copyState = {...prevState};
            copyState.filter = filter;
            return copyState
        })
    };

    handleClosedModal = () =>
    {
        this.setState((prevState) =>
        {

            let tempExpense = prevState.expenseBeingEdited; //read Only!
            let copyState = {...prevState};
            let expenseToOverwrite = copyState.expenses.find(e => e.id === tempExpense.id); //reference

            switch(prevState.currentModalType)
            {
                case ModalType.uploadImage:
                    if (expenseToOverwrite !== undefined)
                        expenseToOverwrite.receipts[0] = tempExpense.receipts[0];
                    break;
                case ModalType.comment:
                    if (expenseToOverwrite !== undefined)
                        expenseToOverwrite.comment = tempExpense.comment;
                    break;
                default:
                    break;
            }
            return copyState;
        });
    };

    closeModal = (expense : Expense, type : ModalType) =>
    {
        this.setState({showModal : false})
    };

    openModal = (e : any, data : any, type : ModalType) =>
    {
        if (type !== ModalType.showImage)
            //here, I had to use {...data}, since the modal window would update the state directly when inputted.
            this.setState({showModal : true, currentModalType : type, expenseBeingEdited : {...data}, imageForModal : undefined});
        else
            this.setState({showModal : true, currentModalType : type, imageForModal : data, expenseBeingEdited : undefined});
    };

    toggleModal = (expense : Expense, type : ModalType) =>
    {
      this.setState({showModal : !this.state.showModal})
    };

    private getDataForModal() : any {
        let modalData;
        switch(this.state.currentModalType) {
            case ModalType.comment:
            case ModalType.uploadImage:
                modalData = this.state.expenseBeingEdited;
                break;
            case ModalType.showImage:
                modalData = this.state.imageForModal;
                break;
            case ModalType.none:
                modalData = null;
                break;
        }
        console.log({modalData : modalData});
        return modalData;
    }

    private getSortedExpenses(exps : Expense[], filter : ExpensesFilter) : Expense[]
    {
        return _.sortBy(exps, (e : Expense) => {
            let ret;
            switch (filter) {
                case ExpensesFilter.Last:
                    ret = e.user.last;
                    break;
                case ExpensesFilter.id:
                    ret = e.id;
                    break;
                case ExpensesFilter.First:
                    ret = e.user.first;
                    break;
                case ExpensesFilter.Date:
                    ret = e.date;
                    break;
                case ExpensesFilter.Amount:
                    ret = e.amount.value;
                    break;
                case ExpensesFilter.Currency:
                    ret = e.amount.currency;
                    break;
            }
            return ret;
        });
    }

    sampleExpenses: any = [
        new Expense({
            id: '0',
            amount: {value: 2.00, currency: "CAD"},
            date: new Date().toISOString(),
            merchant: "Merchant",
            receipts: [],
            comment: "This is a nice comment",
            category: "cat. 42",
            user: {
                first: "Sophie",
                last: "Lamontagne",
                email: "sl@pleo.com"
            },
            index: 0
        }),
        new Expense({
            id: '1',
            amount: {value: 42.00, currency: "CAD"},
            date: new Date().toISOString(),
            merchant: "Merchant",
            receipts: [],
            comment: "This is a nice comment",
            category: "cat. 42",
            user: {
                first: "Marc",
                last: "Lamontagne",
                email: "ml@pleo.com"
            },
            index: 1
        }),
        new Expense({
            id: '2',
            amount: {value: 24.00, currency: "CAD"},
            date: new Date().toISOString(),
            merchant: "Merchant",
            receipts: [],
            comment: "This is a nice comment",
            category: "cat. 42",
            user: {
                first: "Henry",
                last: "Lamontagne",
                email: "hl@pleo.com"
            },
            index: 2
        })
    ];

    private static getDefaultFilter()
    {
        return ExpensesFilter.id;
    }
}

interface IState
{
    showModal : boolean,
    expenses : Expense[],
    filter : ExpensesFilter,
    currentModalType : ModalType,
    expenseBeingEdited : any,
    imageForModal ?: string
}

interface IPropTypes
{}