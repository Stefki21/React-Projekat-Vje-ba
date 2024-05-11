import './App.css';
import React, {useState} from 'react';
import UserInput from './UserInput/UserInput';
import Table from './Table/Table';
import ErrorWindow from './ErrorWindow/ErrorWindow';

function App() {
  const [userData, setUserData] = useState([]);

  const [error, setError] = useState('');

  return (
    <div>
      <UserInput setData={setUserData} error={setError}></UserInput>
      {userData.length !== 0 && <Table data={userData}></Table>}
      {error && <ErrorWindow msg={error} onOkay={setError}></ErrorWindow>}
    </div>
  );
}

export default App;
