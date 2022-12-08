import classes from './ErrorModal.module.css'
import React from 'react';
import Card from "../Card/Card.jsx";
import Button from "../Button/Button.jsx";

const ErrorModal = props => {
    return (
        <>
            <div
                className={classes.backdrop}
                onClick={props.onCloseError}
            ></div>
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
        </>
    )
}

export default ErrorModal