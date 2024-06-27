import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import Order from "./components/Order";
import Createuser from "./forms/Createuser";
import Createorder from "./forms/Createorder";
import { useState, useEffect } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  function Toggle(){
    setToggle(!toggle);
  }
  useEffect(() => {
    const handleSize = () => {
      if(window.innerWidth > 768){
        setToggle(false);
      }
    }
      window.addEventListener('resize', handleSize);
      return() => {
        window.removeEventListener("resize", handleSize);
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <div className="d-flex">
          <div className={toggle ? "d-none" : "w-auto position-fixed"}>
            <Sidebar />
          </div>
          <div className={toggle ? "d-none" : "invisible"}>
            <Sidebar />
          </div>
          <div className="col overflow-auto">
            <Navbar Toggle={Toggle}/>
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/users" exact element={<User />}></Route>
              <Route path="/users/createuserform" exact element={<Createuser />}></Route>
              <Route path="/orders" exact element={<Order />}></Route>
              <Route path="/orders/createorderform" exact element={<Createorder />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
