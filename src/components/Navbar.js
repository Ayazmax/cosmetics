import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag, FiUser, FiSearch } from 'react-icons/fi';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled(motion.div)`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e, #ff6b9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  font-weight: 500;
  color: #2c3e50;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconButton = styled(motion.button)`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #2c3e50;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 107, 107, 0.1);
    color: #ff6b6b;
    transform: scale(1.1);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2c3e50;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const MobileNavLink = styled(motion.a)`
  font-weight: 500;
  color: #2c3e50;
  font-size: 1.1rem;
  cursor: pointer;
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <Nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <NavContainer>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Luminary Beauty
        </Logo>

        <NavLinks>
          <NavLink 
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Home
          </NavLink>
          <NavLink 
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </NavLink>
          <NavLink 
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Products
          </NavLink>
          <NavLink 
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Services
          </NavLink>
          <NavLink 
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </NavLink>
        </NavLinks>

        <NavActions>
          <IconButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FiSearch />
          </IconButton>
          <IconButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FiUser />
          </IconButton>
          <IconButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FiShoppingBag />
          </IconButton>
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </MobileMenuButton>
        </NavActions>
      </NavContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MobileNavLink 
              whileHover={{ x: 10 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </MobileNavLink>
            <MobileNavLink 
              whileHover={{ x: 10 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </MobileNavLink>
            <MobileNavLink 
              whileHover={{ x: 10 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Products
            </MobileNavLink>
            <MobileNavLink 
              whileHover={{ x: 10 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Services
            </MobileNavLink>
            <MobileNavLink 
              whileHover={{ x: 10 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Contact
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
