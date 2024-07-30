import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="flex justify-between m-2 h-22 border-2">
            <div className="w-24 h-24 p-1  mx-4 my-2 flex">
                <img src={LOGO_URL} alt="logo"></img>
                <p className="text-8xl px-4 pb-4 ml-9 text-black">TFC</p>
            </div>
            <div>
                <ul className="flex p-2 m-2 text-xl ">

                    <li className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">Online Status</li>
                    <Link to = "/" className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">Home</Link>
                    <Link to = "/aboutus" className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">About</Link>
                    <li className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">Cart</li>
                    <Link to = "/contactus" className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">Contact</Link>
                    <Link to="/login" className="p-3 m-3 cursor-pointer text-white bg-mediumGreen hover:bg-green-500 rounded-md">Log in</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;