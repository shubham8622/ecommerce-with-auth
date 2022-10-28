import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
const Header = () => {
        const navigate = useNavigate();
        const [user,setUser] = useState();
        const auth = getAuth();
        let data = useSelector((state)=>state.user.userName);
        useEffect(()=>{
            setUser(data);
        },[]);
        const logout  = () =>{
            signOut(auth).then(() => {
                setUser("");
                navigate("/login");
              }).catch((error) => {
                console.log(error.message);
              });
        }
  return (
    <>
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <h1>Firebase</h1>
                    </div>
                    <ul>
                        <li className="nav-items"><Link to="/" className="nav-links">Home</Link></li>
                        {(user === "")?<li className="nav-items"><Link to="/login" className="nav-links">Login</Link></li>:""}
                        {(user === "")?<li className="nav-items"><Link to="/register" className="nav-links">Register</Link></li>:""}
                        {(user !== "")?<li className="nav-items"><Link to="/wishlist" className="nav-links">Wishlist</Link></li>:""}
                        {(user !== "")?<li className="nav-items"><Link to="/products" className="nav-links">Product</Link></li>:""}
                        {(user !== "")?<li className="nav-items" onClick = {logout}><Link className="nav-links">Logout</Link></li>:""}
                    </ul>
                    <div className="bars">
                    <i class="fa-solid fa-bars"></i>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Header