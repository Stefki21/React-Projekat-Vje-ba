import './Table.css';
import Card from "../Card/Card";

function Table (props) {
    return (
       <Card>
            <ul>
                {props.data.map((user) => 
                    <li key={[user.username, user.userage]}>
                        <p>
                            {user.username} ({user.userage})
                        </p>
                    </li>
                )}
            </ul>             
       </Card>
       
    )
}

export default Table;