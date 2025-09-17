import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Skills from "./pages/Skills.jsx";
import SkillDetails from "./components/SkillDetails.jsx";
import InstituteHeader from "./components/InstituteHeader.jsx";
import EventsSection from "./pages/EventsSection.jsx";

export default function App() {
  return (
    <Router>
      {/* 👈 This will scroll to top on every route change */}
      <div className="min-h-screen bg-[#0a0f3d] text-white font-sans flex flex-col scroll-smooth">
        <InstituteHeader />
        <hr className="border-black" />
        {/* <Header /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/skill/:id" element={<SkillDetails />} />
            <Route path="/eventssection" element={<EventsSection />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}





// App.jsx
// import React from "react";
// import { BrowserRouter } from "react-router-dom"; // ✅ import BrowserRouter
// import InstituteHeader from "./components/InstituteHeader.jsx";
// import SkillDetails from "./components/SkillDetails.jsx";
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import LandingPage from "./pages/LandingPage.jsx";
//  import Signup from "./pages/Signup.jsx";
//  import Signin from "./pages/Signin.jsx";

// export default function App() {
//   return (
//     <BrowserRouter> {/* ✅ Wrap the entire app in BrowserRouter */}
//       <div className="min-h-screen bg-[#0a0f3d] text-white font-sans flex flex-col scroll-smooth">
//         <InstituteHeader />
//         <Header />
//         <main className="flex-grow">
//           <LandingPage />
//           <Signup/>
//           <Signin/>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }




