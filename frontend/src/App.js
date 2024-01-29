import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";

const  App = ()=>{
  return (
    <div className="w-full">
          <BrowserRouter>
            <Routes>
               <Route path="/signin" element={<SignIn />}></Route>
               <Route path="/signup" element={<SignUp />}></Route>
               <Route path="/"  element={<Header />}>    
                      
               </Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
