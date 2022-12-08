import classes from "./AddUser.module.css"
import React, {useState} from "react";
import Card from "../../UI/Card/Card.jsx";
import Button from "../../UI/Button/Button.jsx";
import ErrorModal from "../../UI/ErrorModal/ErrorModal.jsx";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState(null)

    const closeError = _ => {
        setError(null)
    }
    const handleUsernameChange = e => {
        setEnteredUsername(e.target.value);
    }
    const handleAgeChange = e => {
        setEnteredAge(e.target.value);
    }
    const handleAddUser = e => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0) {
            setError({
                title: 'Invalid name',
                message: 'Please enter a valid name'
            })
            return
        }
        if (enteredAge.trim().length === 0 || +enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            })
            return
        }
        !error && closeError();
        props.onAddUser({
            username: enteredUsername,
            age: enteredAge
        })
        setEnteredUsername('');
        setEnteredAge('');
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={handleAddUser}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUsername}
                    onChange={handleUsernameChange}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    value={enteredAge}
                    onChange={handleAgeChange}
                />
                <Button type="submit">Add User</Button>
            </form>
            {
                error && (
                    <ErrorModal
                        title={error.title}
                        message={error.message}
                        onCloseError={closeError}
                    />
                )
            }
        </Card>
    )
}

export default AddUser