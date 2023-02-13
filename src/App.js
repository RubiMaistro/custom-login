import React, {useState} from 'react';
import './App.css';
import { Login } from "./pages/Login";
import { Home } from "./pages/Home"

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const togglePage = (pageName) => {
    setCurrentPage(pageName);
    console.log(pageName);
  }
  return (
    <div className="App">
      {
        currentPage === "login" ? <Login onPageSwitch={togglePage} /> : <Home onPageSwitch={togglePage} />
      }
    </div>
  );
}

export default App;
