import './ErrorWindow.css';
import Button from '../Button/Button';

function ErrorWindow (props) {
    function okayButtonHandler() {
        props.okayed(true);
    }

    return (
        <div>
            <div className='dimmed'>  
            </div>
            <div className='window'>
                <p className='mainParagraph'>Invalid Input</p>
                <p className='message'>{props.msg}</p>
                <Button className='okayButton' onSubmit={okayButtonHandler}>Okay</Button>
            </div>
        </div> 
    )
}

export default ErrorWindow;