import React from 'react';
import Navbar from "react-bootstrap/Navbar";

export class NavBar extends React.Component<IState, IPropTypes>
{
    render()
    {
        return (
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
                                <a className="dropdown-item" href="#">None</a>
                                <a className="dropdown-item" href="#">Date</a>
                                <a className="dropdown-item" href="#">First Name</a>
                                <a className="dropdown-item" href="#">Last Name</a>
                                <a className="dropdown-item" href="#">Amount</a>
                                <a className="dropdown-item" href="#">Currency</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </Navbar>
        );
    }
}

interface IState
{

}

interface IPropTypes
{

}