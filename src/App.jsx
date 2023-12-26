import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Paypal } from "./pages/Paypal";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";


function App() {

  const user = 'pepe';
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <BrowserRouter>
       
        {
          !user
          ? (
            <Routes>
              <Route path="/*" element={<Login />} />
            </Routes>
          )
          : (
              <Routes>
                <Route path="/profile" element={ <Profile />} />
                <Route path="/checkout" element={ <Paypal /> } />
                <Route path="/" element={ <Home /> } />
              </Routes>
            )
          }
      </BrowserRouter>    
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
    color: 'white'
  },
}));

export default App
