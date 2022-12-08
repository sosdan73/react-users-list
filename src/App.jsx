import './App.css'
import { useState } from 'react'
import AddUser from "./components/Users/AddUser/AddUser.jsx";
import UsersList from "./components/Users/UsersList/UsersList.jsx";

function App() {
    const [users, setUsers] = useState([]);

    const handleAddUser = userData => {
        setUsers(prevUsers => {
            return [{
                id: !!prevUsers.length ? Math.max(prevUsers.map(user => user.id)) + 1 : 0,
                ...userData
            }, ...prevUsers]
        })
    }

    return (
        <div className="App">
            <AddUser onAddUser={handleAddUser}/>
            <UsersList users={users}/>
        </div>
    )
}

export default App
