import React, {useState} from 'react';
import './App.css';
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { ViewHandle } from "./components/ViewHandle";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const setCredentials = (email, password) => {
    if (validateEmail) {
      setEmail(email);
    } else {
      setEmail("");
    }
    if (validatePassword) {
      setPassword(password);
    } else {
      setPassword("");
    }
    if (checkCredentials){
      navigate("/");
    }
  }

  const deleteCredentials = () => {
    setEmail(undefined);
    setPassword(undefined);
    checkCredentials();
    navigate("/login");
  }

  const checkCredentials = () => {
    if (validateEmail && validatePassword) {
      console.log("Valid");
      return true;
    } else {
      console.log("Invalid");
      return false;
    }
  }

  const validateEmail = () => {
    if (email !== undefined && email !== null) {
      return true;
    }
    return false;
  }

  const validatePassword = () => {
    if (password !== undefined && email !== null) {
      return true;
    }
    return false;
  }

  return (
    <div className="App">
      {
        checkCredentials !== false ? <ViewHandle email={email} password={password} setCredentials={setCredentials} logout={deleteCredentials} /> : <Login setCredentials={setCredentials} />
      }
      <Routes>
        <Route path="/" element={<Home email={email} password={password} />}></Route>
        <Route path="/login" element={<Login setCredentials={setCredentials} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
