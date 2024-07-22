import React from 'react';

import Image from "next/image";
import Header from "./components/Header";
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function Home() {
  return (
    <>
    <Header />
    <Landing />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default Home;