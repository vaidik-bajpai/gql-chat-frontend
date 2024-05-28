import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from './components/sub-components/Appbar';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import ChatRooms from './components/pages/ChatRooms';
import Chats from './components/pages/Chats';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Appbar />}>
                    <Route index element={<Home />}/>
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/login" element={<Login />}/> 
                    <Route path="/chatrooms" element={<ChatRooms/>}/> 
                    <Route path="/chats/:id" element={<Chats/>} />
              </Route>
          </Routes>
      </BrowserRouter>
      
    )
}

export default App
