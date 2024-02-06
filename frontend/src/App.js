import { BrowserRouter, Route, Routes , Navigate} from "react-router-dom";
import Header from './components/header/Header'
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { useEffect } from "react";
import Home from "./components/Home";
import Feed from "./components/Feed";
import Post from "./components/pages/Post";
import Notification from "./components/pages/Notification";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";
import Setting from "./components/pages/Setting";

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
                  {/* <Route path='/feed' element={<Feed />} /> */}
                  <Route path="/post" element={<Post />}/> 
                  <Route path="/notifications" element={<Notification />}/>
                  <Route path="/search" element={<Search />}/>
                  <Route path="/profile" element={<Profile />}/>
                  <Route path="/settings" element={<Setting />}/>
               </Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
