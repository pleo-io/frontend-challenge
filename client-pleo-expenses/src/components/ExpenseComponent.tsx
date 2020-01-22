import React, {Component} from "react";
import Moment from 'react-moment';
import {Expense} from "../models/Expense";
import {Button, Card, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class ExpenseComponent extends Component<IPropTypes, IState> {

    render() {
        return (
            <Card className="card">
                <div className="row py-3 px-3">
                    <div className="col-sm ">
                        <h4 className="align-middle" >{this.props.expense.category}</h4>
                    </div>
                    <span className="col- align-middle">
                        <h4>{this.props.expense.user.first} {this.props.expense.user.last}</h4>
                        <a href={`mailto:${this.props.expense.user.email}`}>
                            <i> {this.props.expense.user.email}</i>
                        </a>
                    </span>
                    <div className="col-sm">
                        <p>{this.props.expense.comment}</p>
                    </div>
                    <h4 className="align-middle px-3 col-">
                        {this.props.expense.amount.value.toFixed(2)}{' '}
                        {this.props.expense.amount.currency}{' '}
                    </h4>
                    <p className="lead mb-1 px-3">
                        <p className="lead mb-1">
                            <Moment format="D MM YYYY" withTitle>
                                {this.props.expense.date}
                            </Moment>
                        </p>
                        <Moment format="HH:mm A" withTitle>{this.props.expense.date}</Moment>
                    </p>
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