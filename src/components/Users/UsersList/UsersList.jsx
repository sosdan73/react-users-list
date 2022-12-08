import classes from './UsersList.module.css'
import React from 'react';
import Card from "../../UI/Card/Card.jsx";

const UsersList = props => {


    return !props.users.length ? '' : (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => <li key={user.id}>{user.username}, {user.age} years</li>)}
            </ul>
        </Card>
    )
}

export default UsersList