import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Services />
        <Contact />
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
