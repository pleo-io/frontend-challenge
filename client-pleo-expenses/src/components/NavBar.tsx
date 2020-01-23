import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import * as _ from 'lodash'

export class NavBar extends React.Component<IPropTypes, IState>
{
    constructor(props : any) {
        super(props);
        this.state = {
            currentFilter : this.getDefaultFilter()
        }
    }

    render()
    {
        return (
           //template inspired from https://getbootstrap.com/docs/4.0/components/navbar/
            <Navbar className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Pleo Expenses</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filters
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {
                                    _.map(ExpensesFilter, (filter) =>
                                    {
                                        return <a key={filter} className={`dropdown-item ${this.getDropDownStyle(filter)}`} onClick={() => this.changeFilter(filter)}>{filter.valueOf()}</a>
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </Navbar>
        );
    }

    changeFilter(filter : ExpensesFilter) {
        this.setState((prevState) =>
        {
            let copyState = { ...prevState };
            copyState.currentFilter = filter;
            return copyState
        });
        this.props.onFilterChanged(filter);
    };

    getDropDownStyle(filter : any) : any
    {
        let styleWhenSelected = '';
        if (this.state.currentFilter === filter)
        {
            styleWhenSelected = "badge-secondary"
        }
        return styleWhenSelected
    }

    getDefaultFilter()
    {
        return ExpensesFilter.id
    }
}

interface IState
{
    currentFilter : ExpensesFilter
}

interface IPropTypes
{
    onFilterChanged : any
}

export enum ExpensesFilter {
    'id' = "None",
    'Date' = "Date",
    'First' = "First name",
    'Last' = "Last name",
    'Amount.value' = "Amount",
    'Amount.currency' = "Currency"
}