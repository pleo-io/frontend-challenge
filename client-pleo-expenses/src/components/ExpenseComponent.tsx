import React, {Component} from "react";
import Moment from 'react-moment';
import {Expense} from "../models/Expense";
import {Button, Card} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class ExpenseComponent extends Component<IPropTypes, IState> {

    render() {

        const expense = this.props.expense;

        return (
            <Card className="card">
                <div className="row py-3 px-3">
                    <div className="col-sm">
                        <img src={(expense.receipts.length !== 0) ? expense.receipts[0].uri : "http://picsum.photos/200/300"}/>
                        <h4 className="align-middle" >{this.props.expense.category}</h4>
                    </div>
                    <span className="col- align-middle">
                        <h4>{this.props.expense.user.first} {this.props.expense.user.last}</h4>
                        <a href={`mailto:${this.props.expense.user.email}`}>
                            <i className="align-middle">{this.props.expense.user.email}</i>
                        </a>
                    </span>
                    <div className="col-lg">
                        <p>{this.props.expense.comment}</p>
                    </div>
                    <h4 className="align-middle px-3 col-">
                        {this.props.expense.amount.value.toFixed(2)}{' '}
                        {this.props.expense.amount.currency}{' '}
                    </h4>
                    <span className="lead mb-1 px-3">
                        <p className="lead mb-1">
                            <Moment format="D MM YYYY" withTitle>
                                {this.props.expense.date}
                            </Moment>
                        </p>
                        <Moment format="HH:mm A" withTitle>{this.props.expense.date}</Moment>
                    </span>
                    <div className="flex-row px-3">
                        <Button
                            className="btn-primary btn-lg"
                            //onClick={e => this.props.openImageModal(e, this.props.expense.id)}
                        >
                            <span className="badge">Open Image</span>
                        </Button>
                        <Button
                            className="btn-info btn-lg"
                            /*onClick={e =>
                                this.props.openCommentModal(
                                    e,
                                    this.props.expense.id,
                                    this.props.expense.comment
                                )
                            }*/
                        >
                            <span className="badge">Edit Comment</span>
                        </Button>
                    </div>
                </div>
            </Card>
        );
    }
}

interface IPropTypes {
    expense: Expense
}

interface IState {

}