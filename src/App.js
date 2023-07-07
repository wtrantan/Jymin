import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from "./scenes/Main/Main";
import Login from "./scenes/Login/Login";
import Register from "./scenes/Register/Register";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
  );
}

export default App;
