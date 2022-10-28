import React from 'react'
import { useState } from 'react'
import {app} from '../../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    let auth = getAuth();
    const [fieldValues,setFieldValues] = useState({email:"",password:"",number:""});
    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setFieldValues({...fieldValues,[name]:value});
    }

    const handleForm = (event) =>{
        event.preventDefault();
        createUserWithEmailAndPassword(auth,fieldValues.email,fieldValues.password,fieldValues.number)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            alert(error.message);
        })
    }
  return (
    <>
        <section className='register-section'>
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
                        <div className="number-field fields">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="number" id="number-field" value={fieldValues.number} onChange={handleInput}/>
                        </div>
                        <div className="button">
                            <button>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Register