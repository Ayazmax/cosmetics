import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSend, FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiHeart } from 'react-icons/fi';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 80px 0 40px;
  position: relative;
  overflow: hidden;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #ecf0f1;
  }
`;

const FooterLogo = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const FooterDescription = styled.p`
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    transform: translateY(-3px);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;

  a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6b6b;
    }
  }
`;

const NewsletterSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 3rem;
  backdrop-filter: blur(10px);
`;

const NewsletterTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ecf0f1;
`;

const NewsletterDescription = styled.p`
  color: #bdc3c7;
  margin-bottom: 1.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #bdc3c7;
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const NewsletterButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: #bdc3c7;
`;

const Copyright = styled.p`
  margin-bottom: 1rem;
`;

const MadeWithLove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #bdc3c7;

  .heart {
    color: #ff6b6b;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterColumn variants={itemVariants}>
            <FooterLogo>Luminary Beauty</FooterLogo>
            <FooterDescription>
              We are passionate about creating premium cosmetics that enhance your natural beauty 
              while maintaining the highest standards of quality and safety.
            </FooterDescription>
            <SocialLinks>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiFacebook />
              </SocialLink>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiTwitter />
              </SocialLink>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram />
              </SocialLink>
              <SocialLink
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiYoutube />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn variants={itemVariants}>
            <h3>Quick Links</h3>
            <FooterLinks>
              <FooterLink><a href="/">Home</a></FooterLink>
              <FooterLink><a href="/">About Us</a></FooterLink>
              <FooterLink><a href="/">Products</a></FooterLink>
              <FooterLink><a href="/">Services</a></FooterLink>
              <FooterLink><a href="/">Contact</a></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn variants={itemVariants}>
            <h3>Products</h3>
            <FooterLinks>
              <FooterLink><a href="/">Skincare</a></FooterLink>
              <FooterLink><a href="/">Makeup</a></FooterLink>
              <FooterLink><a href="/">Fragrances</a></FooterLink>
              <FooterLink><a href="/">Hair Care</a></FooterLink>
              <FooterLink><a href="/">Bath & Body</a></FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn variants={itemVariants}>
            <h3>Support</h3>
            <FooterLinks>
              <FooterLink><a href="/">Help Center</a></FooterLink>
              <FooterLink><a href="/">Shipping Info</a></FooterLink>
              <FooterLink><a href="/">Returns</a></FooterLink>
              <FooterLink><a href="/">Size Guide</a></FooterLink>
              <FooterLink><a href="/">Contact Support</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>

        <NewsletterSection
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <NewsletterTitle>Stay Updated</NewsletterTitle>
          <NewsletterDescription>
            Subscribe to our newsletter for the latest beauty tips, product launches, and exclusive offers.
          </NewsletterDescription>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NewsletterButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSend />
              Subscribe
            </NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>

        <FooterBottom
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Copyright>
            © 2024 Luminary Beauty. All rights reserved.
          </Copyright>
          <MadeWithLove>
            Made with <FiHeart className="heart" /> by Luminary Beauty Team
          </MadeWithLove>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
