import React, {Component} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {ModalType} from "../utils/ModalType";

export class ModalExpenses extends Component<IPropTypes, IState> {

    constructor(props : any) {
        super(props);
        this.escFunction = this.escFunction.bind(this);
    }

    //inspired by https://stackoverflow.com/questions/37440408/how-to-detect-esc-key-press-in-react-and-how-to-handle-it/46123962
    escFunction(event : any){
        if(event.keyCode === 27) {
            this.props.toggle(this)
        }
    }

    componentDidMount(){
        document.addEventListener("keyup", this.escFunction, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keyup", this.escFunction, false);
    }

    render(){
        const props = this.props;
        return (
            <Modal
            isOpen={props.show}
            size="lg"
            onClosed={() => props.handleClose(this.props.type)}>
                <ModalHeader>{this.getModalTitle()}</ModalHeader>

                {this.getModalBody()}

                <ModalFooter>
                    <Button variant="secondary" onClick={() => {
                        props.toggle()
                    }}>Close</Button>
                    <Button variant="primary" onClick={() => {props.toggle()}}>Confirm</Button>
                </ModalFooter>
            </Modal>

        );
    }

    getModalTitle() {
        let title = "Untitled";
        switch (this.props.type) {
            case ModalType.none:
                break;
            case ModalType.comment:
                title = "Comment";
                break;
            case ModalType.uploadImage:
            case ModalType.showImage:
                title = "Image";
                break;
        }
        return title;
    }

    getModalBody()
    {
        let innerBody = ModalExpenses.defaultBody;
        switch (this.props.type) {
            case ModalType.none:
                innerBody = ModalExpenses.defaultBody;
                break;
            case ModalType.comment:
                innerBody = this.getEditCommentArea();
                break;
            case ModalType.showImage:
                innerBody = this.getShowPictureBody();
                break;
            case ModalType.uploadImage:
                innerBody = this.getUploadPictureBody();
                break;
        }
        return (
            <ModalBody>
                <div className="container-fluid">
                    {innerBody}
                </div>
            </ModalBody>
        );
    }

    private getEditCommentArea()
    {
        return (
            <div className="md-form">
                <textarea className="md-textarea form-control"
                          inputMode="text"
                          autoFocus={true}
                          aria-multiline={true}
                          defaultValue={this.props.data.comment}
                          onChange={(e) => this.props.onChangeTempData(e.target.value)}
                />
            </div>
        );
    }

    private getUploadPictureBody()
    {
        return (
            <form className="md-form">
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Select your receipt</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(e) => this.props.onChangeTempData(e.target.value)}/>
                </div>
            </form>
        );
    }

    private getShowPictureBody()
    {
        return (<img className="img-thumbnail" src={this.props.data} alt="Nothing"/>);
    }

    private static defaultBody = (<div>There is nothing to show.</div>);
}

interface IState {
}

interface IPropTypes {
    show : boolean,
    toggle : any,
    handleClose : any,
    onChangeTempData : any,
    type : ModalType,
    //here, if we open a modal on an image, the data field will only be the uri string of the image.
    //else, it will be of type 'Expense'
    data : any
}

