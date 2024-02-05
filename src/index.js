import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Redirect,  Link} from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/Layout';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import User from './components/user/User';
import Login from './components/Login';
import Signin from './components/Signin';
import AddUserData from './components/AddUserData';
import UpdateUseData from './components/UpdateUserData';


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>,
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user/:userId' element={<User/>}/>
      <Route path='/adduser' element={<AddUserData/>}/>
      <Route path='/updateuser/:id' element={<UpdateUseData/>}/>
    </Route>
  )
)

// https://flowbite.com/docs/typography/images/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
