import React, { useState,useRef } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const navigate = useNavigate();
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [invalidMsg,setinvalidMsg]= useState(null);
    const name = useRef(null);
    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);
    const toggleSignin = ()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleClick = ()=>{
        const msg = validateData(email.current.value,password.current.value);
        setinvalidMsg(msg);
        if(msg) return;
        if(!isSignInForm){
              createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current.value, photoURL: "https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
                }).then(() => {
                  const {uid,email,displayName,photoURL} =auth.currentUser;
                  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                }).catch((error) => {
                  navigate("/error");
                });

              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode!=null){
                        setinvalidMsg("Email Already Exist");
                }
              });
        }else{//sign in
              signInWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode!==null){
                        setinvalidMsg("User not found or Password is wrong");
                }
              });
        }
    }
  return (
    <div>
        <Header />
      <div className=" absolute w-full h-full">
      <img className='absolute inset-0 object-cover w-screen h-screen' src="https://www.ubereats.com/_static/c413f20400e04805.webp" alt='background'></img>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      
      </div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 my-36 mx-auto right-0 left-0 bg-black w-3/12 text-white bg-opacity-80 rounded-lg">
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
        { !isSignInForm && <input ref={name} type="text" placeholder="Name" className="p-4 m-3 border border-gray-400 rounded-1px bg-transparent w-full rounded-sm"></input>}
            <input ref={email} type="text" placeholder="Email or Phone Number" className="p-4 m-3 border border-gray-400 rounded-1px bg-transparent w-full rounded-sm"></input>
            <input ref={password} type="password" placeholder="Password"  className="p-4 m-3 border border-gray-400 rounded-1px bg-transparent w-full rounded-sm"></input>
            <p className='text-red-700 m-4'>{invalidMsg}</p>
            <button type="submit" className='p-3 m-3 bg-red-600 w-full rounded-md' onClick={handleClick}>{isSignInForm? "Sign In" : "Sign Up" }</button>
        <p className='py-4 m-3 cursor-pointer hover:underline-offset-auto' onClick={toggleSignin} >{isSignInForm? "New to TFC? Sign up now" : "Already a user? Sign In now"}</p>
        </form>
    </div>
  )
}

export default Login
