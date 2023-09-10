import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideModal} />
}

const Overlay = (props) => {
    return <div className={classes.modal}>
            {props.children}
        </div>
}

function Modal(props) {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onHideModal={props.onHide} />,
                document.getElementById("overlays")
            )}
            {ReactDOM.createPortal(
                <Overlay>{props.children}</Overlay>,
                document.getElementById("overlays")
            )}
        </React.Fragment>
    );
           
}

export default Modal;