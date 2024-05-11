import './Button.css';

function Button (props) {
    return (
        <button type='submit' onClick={props.onSubmit} className={props.className}><p>Add User</p></button>
    )
}

export default Button;