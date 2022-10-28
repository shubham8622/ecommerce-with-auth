import React from 'react'
import { useState } from 'react'
import {app} from '../../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup   } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    let auth = getAuth();
    let googleProvider = new GoogleAuthProvider();
    const [fieldValues,setFieldValues] = useState({email:"",password:""});
    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setFieldValues({...fieldValues,[name]:value});
    }

    const handleForm = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword (auth,fieldValues.email,fieldValues.password)
        .then((response)=>{
            navigate('/products');
        })
        .catch((error)=>{
            alert(error.message);
        })
    }
    const handleGoogleLogin = ()=>{
        signInWithPopup(auth,googleProvider)
        .then((response)=>{
            navigate('/products');
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
  return (
    <>
        <section className='login-section'>
            <div className="container">
                <div className="form">
                    <form onSubmit={handleForm}>
                        <div className="email-field fields">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="email-field" value={fieldValues.email} onChange={handleInput}/>
                        </div>
                        <div className="password-field fields">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" id="password-field" value={fieldValues.password} onChange={handleInput}/>
                        </div>
                        <div className="button">
                            <button>Login</button>
                        </div>
                    </form>
                        <div className="social-login button">
                            <button onClick={handleGoogleLogin}>Login With Google</button>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default LoginForm