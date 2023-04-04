
import './App.css'
import Mru from './pages/mru'
import Mrua from './pages/mrua'
import DarkMode from './pages/component/DarkMode'
import Navbar from './component/navbar';
import Home from './pages/home/home'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="container mx-auto  dark:text-gray-100 dark:bg-slate-900 duration-100">

      <DarkMode />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/mru' element={<Mru/>}/> 
          <Route path='/mrua' element={<Mrua/>}/> 
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
