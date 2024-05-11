import './ErrorWindow.css';
import Button from '../Button/Button';
import Card from '../Card/Card';

function ErrorWindow (props) {
    function okayButtonHandler() {
        props.onOkay('');
    }

    return (
        <div>
            <div className='dimmed'>  
            </div>
            <Card className='window'>
                <p className='mainParagraph'>Invalid Input</p>
                <p className='message'>{props.msg}</p>
                <Button className='okayButton' onSubmit={okayButtonHandler}><p>Okay</p></Button>
            </Card>
        </div> 
    )
}

export default ErrorWindow;