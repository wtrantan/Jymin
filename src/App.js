import './App.css';
import Nav from "./Nav";
import Bruh from "./Audio.js";
import Create from "./pages/Create.js";
import Login from './pages/Login.js';
import { AuthProvider,useSignIn } from 'react-auth-kit';
import {Route, Routes} from "react-router-dom";
import{Link} from "react-router-dom";


function App() {
  
  
  return (
<div> 
     
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new" element={<Create />} />
    </Routes>
      
    </div>
  );
  
}


export default App;
