import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from './components/sub-components/Appbar';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Appbar />}>
                    <Route index element={<Home />}/>
                    <Route path="/signup" element={<Signup />}/>
                    {/* <Route path="/chats/:id" element={<Chat />}/>
                    <Route path="/login" element={<Login />}/>  */}
              </Route>
          </Routes>
      </BrowserRouter>
      
    )
}

export default App
