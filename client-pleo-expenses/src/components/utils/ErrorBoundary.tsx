import React from "react";

//taken from https://reactjs.org/docs/error-boundaries.html

export default class ErrorBoundary extends React.Component<IPropTypes, IState>
{
    constructor(props: IPropTypes)
    {
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error: any)
    {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error: any, errorInfo: any)
    {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render()
    {
        if (this.state.hasError)
        {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

interface IState
{
    hasError: boolean
}

interface IPropTypes
{

}