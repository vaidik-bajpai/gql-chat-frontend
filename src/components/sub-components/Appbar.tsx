import { Outlet, useNavigate } from "react-router-dom"
import { NavButton } from "./Button"

export default function Appbar() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex bg-purple-500 justify-between items-center px-4 py-4 border-0 border-b-2 border-yellow-200 mb-8">
                <div className="font-bold text-2xl text-white">Chatter-Box</div>
                <div className="flex gap-1.5 items-center">
                    <div className="font-bold flex gap-2">
                        <NavButton customStyles="text-purple-500 border-2 border-yellow-200 bg-white" buttonText="Signup" onClick={() => {navigate("/signup")}}/>
                        <NavButton customStyles="text-purple-500 border-2 border-yellow-200 bg-white" buttonText="Login" onClick={() => {navigate("/login")}}/>
                    </div>
                </div>
            </div>
            <div className="w-[100%] flex justify-center items-center">
                <Outlet />
            </div>
        </div>
    )
}