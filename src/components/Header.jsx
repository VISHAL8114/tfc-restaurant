import { LOGO_URL } from "../utils/constants"
const Header = ()=>{
    return (
        <div className="flex justify-between m-2 h-22 border-2 border-black">
            <div className="w-24 h-24 p-1  mx-4 my-2 flex">
                <img src={LOGO_URL} alt="logo"></img>
                <p className="text-8xl px-4 pb-4 ml-9 text-black">TFC</p>
            </div>
            <div>
                <ul className="flex p-2 m-2 text-xl ">

                    <li className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">Online Status</li>
                    <li className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">Home</li>
                    <li className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">About Us</li>
                    <li className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">Cart</li>
                    <li className="p-3 m-3 cursor-pointer hover:text-orange-400 rounded-xl">Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;