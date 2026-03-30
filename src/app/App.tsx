import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Insights } from "./components/Insights";
import { Contact } from "./components/Contact";
import heroVideo from "../assets/Website_Hero_Section_Video_Ready.mov";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#052747] font-sans flex flex-col relative text-white">
        {/* Global Video Background spanning behind header, components, and footer */}
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: 0 }}
        />

        {/* Content Wrapper */}
        <div className="relative flex flex-col min-h-screen" style={{ zIndex: 10 }}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
