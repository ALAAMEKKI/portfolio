import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Contact />
      <footer  className=" text-center py-8  bg-gray-900 ">   
            <div>
                <p className="text-white text-bold text-label-subtitle">Made by Alaa Mekki with React.js & Tailwind.css</p>
                
            </div>
        </footer>
    </>
    
  );
}

export default App;
