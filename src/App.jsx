import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import FloatingButtons from './components/FloatingButtons'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TentsCanopies from './pages/TentsCanopies';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <BrowserRouter>
      <Sidebar />
        <FloatingButtons />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/معلومات-عنا" element={<AboutUs />} />
          <Route path="/إتصل-بنا" element={<ContactUs />} />
          <Route path="/تفصيل-خيام-والمظلات" element={<TentsCanopies />} />

          
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
