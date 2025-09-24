import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Services from './components/Services';
import WorkingProcess from './components/WorkingProcess';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        
        <Services />
        <WorkingProcess />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;