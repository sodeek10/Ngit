import { useState } from 'react';
import ResponsiveNavbar from './navbar';
import HeroSection from './hero';
import ProgramDetails from './program';
import Footer from './footer';

function App() {
  return (
      <div>
        
      <ResponsiveNavbar />
      <HeroSection />
       <ProgramDetails /> 
        <Footer />
      </div>   
  );
}
export default App
