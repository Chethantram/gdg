import { useContext, useEffect, useState } from "react";
import { LogIn, LogOut, MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import {redirect, useNavigate} from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "@/context/StoreContext";


const Navbar = ({setShowLogin}) => {
  const [active, setActive] = useState('Home');
  const {setToken,token} = useContext(StoreContext);
  // const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, [setToken]);
  const logout = async()=>{
    
    localStorage.removeItem("token");
    setToken("");
    redirect('/');
  }
  
  

  
  
  
  return (
    <nav className="flex justify-between items-center py-2 px-10  max-h-[200px] bg-fixed   bg-background/60 border-b">
      <div className="flex items-center  gap-20">
        <h1 className="font-bold  text-2xl"><span className=" text-blue-600">O</span>penLearn<span className=" text-blue-600">X</span></h1>
        <ul className="flex items-center gap-10 text-md text-foreground text-hover cursor-pointer">
          <li onClick={()=>setActive('Home')} className={`${active ==='Home'?"active  ":""} hover:border-gray-500 hover:border-b-3`}>Home</li>
          <li onClick={()=>setActive('Courses')} className={`${active ==='Courses'?"active ":""} hover:border-gray-500 hover:border-b-3 `}>Courses</li>
          <li onClick={()=>setActive('Quiz')} className={`${active ==='Quiz'?"active":""} hover:border-gray-500 hover:border-b-3  `}>Quiz</li>
        </ul>
      </div>
      <div className="space-x-4 flex">
        
        {!token?<Button onClick={()=>setShowLogin(true)} className=" bg-blue-600 text-white hover:bg-blue-800 ">
          <LogIn className="size-5" />
          Sign In
        </Button>:<Button onClick={logout} variant="destructive" >
          <LogOut className="size-5" />
          Logout
        </Button>}
      </div>
    </nav>
  );
};

export default Navbar;