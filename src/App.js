import './App.css';
import Home from './pages/Home';
import RegisterForm from './pages/components/Register/Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/components/Login/';
import { useLayoutEffect } from 'react';
import { getAuth } from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {addUserData} from './store/userLogin';
import Products from './pages/components/Products';
import Wishlist from './pages/components/Wishlist';
function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  useLayoutEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          dispatch(addUserData(user.displayName))
        }else{
          dispatch(addUserData(""))
        }
      })
  })
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
