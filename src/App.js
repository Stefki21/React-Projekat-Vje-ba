import './App.css';
import React, {useState} from 'react';
import UserInput from './UserInput/UserInput';
import Table from './Table/Table';
import ErrorWindow from './ErrorWindow/ErrorWindow';

function App() {
  const [userData, setUserData] = useState([]);

  const [errorCheck, setErrorCheck] = useState('');

  const [okayed, setOkayed] = useState(false);
  
  return (
    <div>
      <UserInput setData={setUserData} errorCheck={setErrorCheck} okayed={setOkayed} ></UserInput>
      {userData.length !== 0 && <Table data={userData}></Table>}
      {(errorCheck === 'empty input' && okayed === false) && <ErrorWindow msg={'Please enter a valid name and age (non-empty values).' } okayed={setOkayed}></ErrorWindow>}
      {(errorCheck === 'negative number' && okayed === false) && <ErrorWindow msg={'Please enter a valid age (> 0).'} okayed={setOkayed}></ErrorWindow>}
    </div>
  );
}

export default App;
