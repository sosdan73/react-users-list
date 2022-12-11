import classes from "./AddUser.module.css"
import React, {useState, useRef} from "react";
import Card from "../../UI/Card/Card.jsx";
import Button from "../../UI/Button/Button.jsx";
import ErrorModal from "../../UI/ErrorModal/ErrorModal.jsx";
import Wrapper from "../../Helpers/Wrapper.jsx";

const AddUser = props => {
    const nameInputRef = useRef('');
    const ageInputRef = useRef('');

    const [error, setError] = useState(null)

    const closeError = _ => {
        setError(null)
    }
    const handleAddUser = e => {
        e.preventDefault();
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;

        if (name.trim().length === 0) {
            setError({
                title: 'Invalid name',
                message: 'Please enter a valid name'
            })
            return
        }
        if (age.trim().length === 0 || +age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            })
            return
        }
        !error && closeError();
        props.onAddUser({
            username: name,
            age: age
        })
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    return (
        <Wrapper>
            <Card className={classes.input}>
                <form onSubmit={handleAddUser}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
            {
                error && (
                    <ErrorModal
                        title={error.title}
                        message={error.message}
                        onCloseError={closeError}
                    />
                )
            }
        </Wrapper>
    )
}

export default AddUser