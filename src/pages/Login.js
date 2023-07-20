    import App from "../App"
    import Create from "./Create"
    import { AuthProvider,useSignIn } from 'react-auth-kit'
    import {Route, Routes} from "react-router-dom" 
    import{Link} from "react-router-dom"

export default function Login() {

  function login(){
    
  }
  function Budio(a){
 
    /*if(ab!=null || ab != ""){
      let a = document.getElementById();
      a.play();
    }
    */
    
   let audio = new Audio('spiderman.mp3');
    a = 0;
    audio.pause();
    audio.currentTime = 0;
    audio.autoplay = false;
    audio.volume = 0.2;
    audio.loop = false;
    audio.play();

    
    
  }
    return (
      <div className="App flex justify-center items-center bg-gradient-to-r from-slate-500 to-gray-300 h-screen">
  
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        
        <h1 className=" font-semibold text-center text-5xl text-blue-700">
          <a id="audio" mute="muted" onClick={() => Budio()}><img id="image"  className="pointer-events-auto fixed float-left h-20" src="muscle_002.jpg" ></img></a>
          Jymin</h1>
        
        <audio id="spider"  src="spiderman.mp3" preload="auto"></audio>
        <h2 className="text-3xl block text-center font-semibold">Login</h2>
        <hr className="mt-3"></hr>
        <div id="error"></div>
        <form id="form" action="/" method="GET">
        <div className="mt-3">
          <label className="block text-base mb-2" for="username">Username:</label>
          <input type="text" name="username" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Username"></input>
        </div>
        <div className="hidden mt-3">
          <label className="block text-base mb-2" for="username">Email:</label>
          <input type="text" name="email" id="email" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Email"></input>
        </div>
        <div className="mt-3">
          <label className="block text-base mb-2" for="password">Password:</label>
          <input id="password" name="password" type="password" className="border w-full text-base px-2 py-1 focuss:outline-none focus:ring-0 focus:border-gray-600" placeholder="Password"></input>
        </div>
        <div className="my-3 flex justify-between items-center"> 
          <div>
            <input type="checkbox"></input>
            <label>Remember Me</label>
          </div>
          
          <div>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Forgot Password?</a>
          </div>
        </div>
        <div>
          <button id="submit" type="submit" className="border-2 border-cyan-600 bg-cyan-600 text-white py-1 w-full rounded-md hover:bg-cyan-500 hover:text-gray-600 font-semibold">Login</button>
        </div>
        </form>
        <div className="my-3 text-center">
        <Link to="New" className="text-blue-600 font-semibold hover:underline">Create New Account</Link>
        </div>
      </div>
    </div>
      
    );
    
  }