import React, {Component} from "react";
import Moment from 'react-moment';
import {Expense} from "../models/Expense";
import {Button, Card} from 'reactstrap';
import {ModalType} from "./utils/ModalType";
import 'bootstrap/dist/css/bootstrap.min.css';

export class ExpenseComponent extends Component<IPropTypes, IState>
{
    render()
    {
        const props = this.props;
        const expense = props.expense;
        if (expense === undefined || expense.user === undefined)
        {
            return <h2>Something went wrong</h2>
        }

        return (
            <Card className="card">
                <div className="row py-3 px-3">
                    <div className="card-title px-3">
                        {expense.receipts.map(r =>
                        {
                            let src: string = (r.uri !== undefined) ? r.uri : "http://picsum.photos/200/300";
                            return <img className="img-thumbnail" src={src} alt="nothing" onClick={(e) =>
                            {
                                this.props.onModalPrompt(e,)
                            }}/>;
                        })}
                        <h4 className="align-middle">{expense.category}</h4>
                    </div>
                    <span className="card-body">
                        <h4>{expense.user.first} {expense.user.last}</h4>
                        <div>
                            <a href={`mailto:${expense.user.email}`}>
                            <i className="align-middle">{expense.user.email}</i>
                        </a>
                            <p/>
                        <span className="align-middle">{expense.comment}</span>
                        </div>
                    </span>
                    <h4 className="px-3 col-sm">
                        {Number(expense.amount.value).toFixed(2)}{' '}
                        {expense.amount.currency}{' '}
                    </h4>
                    <span className="lead mb-1 px-3">
                        <p className="lead mb-1">
                            <Moment format="D MM YYYY" withTitle>
                                {expense.date}
                            </Moment>
                        </p>
                        <Moment format="HH:mm A" withTitle>{expense.date}</Moment>
                    </span>
                    <div className="row- px-3">
                        <Button
                            className="btn-primary btn-lg"
                            onClick={e => this.props.onModalPrompt(e, expense, ModalType.uploadImage)}
                        >
                            <span className="badge">Upload Receipt</span>
                        </Button>
                        <Button
                            className="btn-info btn-lg"
                            onClick={e =>
                                this.props.onModalPrompt(
                                    e,
                                    expense,
                                    ModalType.comment
                                )
                            }
                        >
                            <span className="badge">Edit Comment</span>
                        </Button>
                    </div>
                </div>
            </Card>
        );
    }
}

interface IPropTypes
{
    expense: Expense
    onModalPrompt: any
}

interface IState
{

}