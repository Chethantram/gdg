import { useState } from "react";
import { LogIn, MailIcon } from "lucide-react";


const Navbar = () => {
  const [active, setActive] = useState('Home');
  return (
    <nav className="flex justify-between items-center py-2 px-10  max-h-[200px] bg-fixed   bg-background/60 border-b">
      <div className="flex items-center  gap-20">
        <h1 className="font-bold  text-2xl"><span className=" text-blue-600">O</span>penLearn<span className=" text-blue-600">X</span></h1>
        <ul className="flex items-center gap-10 text-md text-foreground text-hover cursor-pointer">
          <li onClick={()=>setActive('Home')} className={`${active ==='Home'?"active  ":""} hover:border-gray-500 hover:border-b-3`}>Home</li>
          <li onClick={()=>setActive('Courses')} className={`${active ==='Courses'?"active ":""} hover:border-gray-500 hover:border-b-3 `}>Courses</li>
          <li onClick={()=>setActive('Quiz')} className={`${active ==='Quiz'?"active":""} hover:border-gray-500 hover:border-b-3  `}>Quiz</li>
          <li onClick={()=>setActive('Packages')} className={`${active ==='Packages'?"active":""} hover:border-gray-500 hover:border-b-3  `}>Packages</li>
          <li onClick={()=>setActive('Blog')} className={`${active ==='Blog'?"active":""} hover:border-gray-500 hover:border-b-3  `}>Blog</li>
          <li onClick={()=>setActive('Groups')} className={`${active ==='Groups'?"active":""} hover:border-gray-500 hover:border-b-3  `}>Groups</li>
          <li onClick={()=>setActive('More')} className={`${active ==='More'?"active":""} hover:border-gray-500 hover:border-b-3  `}>More</li>
          <li onClick={()=>setActive('Contact Us')} className={`${active ==='Contact Us'?"active":""} hover:border-gray-500 hover:border-b-3  `}>Contact Us</li>
        </ul>
      </div>
      <div className="space-x-4 flex">
        <button className="flex text-sm font-medium gap-3 px-4 py-2 bg-gray-800 text-white hover:bg-gray-600 rounded-md" >
          <MailIcon className="size-5" />
          Register
        </button>
        <button className="flex text-sm font-medium gap-3 px-3 py-2 bg-blue-600 text-white hover:bg-blue-800 rounded-md">
          <LogIn className="size-5" />
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;