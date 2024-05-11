import './UserInput.css';
import Card from '../Card/Card';
import Button from '../Button/Button';
import React, {useState} from 'react';


function UserInput (props) {
    console.log(props.setData)
    const[currentUser, setCurrentUser] = useState({username: '', userage: ''})

    function inputChangeHandler(input, value) {
        setCurrentUser((prevInput) => {
            return {
                ...prevInput, 
                [input]: value
            }  
        }   
    )
}

    

function submitHandler(event) {
    event.preventDefault();
    if(currentUser.username && +currentUser.userage>0) {
        props.setData((prevData) => [
            ...prevData,
            currentUser
        ]
    );
    setCurrentUser({username: '', userage: ''});
    }else if(!currentUser.username || !currentUser.userage) {
        props.error('Please enter a valid name and age (non-empty values).');
    }else {
        props.error('Please enter a valid age (> 0).');
    }
}


    return (
        <Card>
            <form onSubmit={submitHandler}>
                <label htmlFor='username'><b>Username</b></label>
                <input type='text' id='username' name='username' value={currentUser.username} onChange={(event) => inputChangeHandler(event.target.id, event.target.value)} />
                <label htmlFor='userage'><b>Age(Years)</b></label>
                <input type='number' id='userage' name='userage' value={currentUser.userage} onChange={(event) => inputChangeHandler(event.target.id, event.target.value)} />
                <Button><p>Add User</p></Button>
            </form>
        </Card>
    )
}

export default UserInput;