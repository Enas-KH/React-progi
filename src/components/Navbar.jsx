import React, { useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
 const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
       setNav(!nav);
    }
    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#0c1c34]">
            <h1 className="w-full text-3xl font-bold text-[#0c1c34] ">Coursy</h1>

            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">About </li>
                <li className="p-4">Courses</li>
                <li className="p-4">contact</li>
            </ul> 
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-gray-200 ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold text-[#0c1c34] m-4">Coursy</h1>
            <ul className="pt-12 uppercase">
                <li className="p-4 border-b border-gray-300">Home</li>
                <li className="p-4 border-b border-gray-300">About Us</li>
                <li className="p-4 border-b border-gray-300">Courses</li>
                <li className="p-4 ">contact</li>
            </ul>
            </div>
        </div>
    )
 } 
 export default Navbar