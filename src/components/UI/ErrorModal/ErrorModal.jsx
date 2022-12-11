import classes from './ErrorModal.module.css'
import React from 'react';
import ReactDOM from "react-dom";
import Card from "../Card/Card.jsx";
import Button from "../Button/Button.jsx";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const Modal = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onCloseError}>Ok</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onCloseError} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <Modal
                    title={props.title}
                    message={props.message}
                    onCloseError={props.onCloseError}
                />,
                document.getElementById('modal-root')
            )}
        </>
    )
}

export default ErrorModal