import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
