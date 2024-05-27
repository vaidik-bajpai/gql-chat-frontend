/* import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function UserComponent() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user);
            })
    }, [filter])
    return (
        <div className="p-4">
            <div className="font-medium text-lg mb-2">
                Users
            </div>
            <div className="mb-2"> 
                <input type="text" placeholder="Search users..." className="w-[100%] p-1 border border-black-2" onChange={e => setFilter(e.target.value)}/>
            </div>
            
            <div className="flex flex-col gap-3">
                {users.map(user => {
                    return <User key={user._id} userid={user._id} userInitial={user.firstName[0].toUpperCase()} userName={user.firstName + " " + user.lastName}/>
                })}
            </div>
        </div>
    )
} */

function User({userInitial, userName, userid}) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between">
            <div className="flex gap-1.5 items-center">
                <div className="w-8 h-8 bg-blue-200 grid place-items-center rounded-full font-medium">{userInitial}</div>
                <div className="font-semibold">{userName}</div>
            </div>
            <div>
                <button onClick={() => navigate("/send" + "?id=" + userid + "&name=" + userName)} className="bg-gray-600 text-white p-1 rounded">send money</button>
            </div>
        </div>
    )
}
