import { BrowserRouter, Route, Routes , Navigate} from "react-router-dom";
import Header from './components/header/Header'
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { useEffect } from "react";
import Home from "./components/Home";

const  App = ()=>{
  
  useEffect(()=>{
 
      
  },[])
  return (
    <div className="w-full">
          <BrowserRouter>
            <Routes>
               <Route path="/signin" element={<SignIn />}></Route>
               <Route path="/signup" element={<SignUp />}></Route>
               <Route path="/"  element={<Header />}>    
                  <Route path="/" element={<Home />} />
               </Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
