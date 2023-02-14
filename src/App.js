import React, {useState} from 'react';
import './App.css';
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { DataList } from "./pages/DataList";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setCredentials = (email, password) => {
    setEmail(email);
    setPassword(password);
  }

  const checkCredentials = (email, password) => {
    return true;
  }

  return (
    <div className="App">
      {
        checkCredentials(email, password) ? <Login onPageSwitch={setCredentials} /> : <DataList />
      }
    </div>
  );
}

export default App;
