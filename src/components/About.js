import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiHeart, FiShield, FiAward, FiUsers } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80') center/cover;
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  
  span {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #7f8c8d;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    color: #2c3e50;
    margin-bottom: 0.8rem;

    &::before {
      content: '✓';
      color: #ff6b6b;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const AboutImage = styled(motion.div)`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e, #ff6b9d);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(255, 107, 107, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e, #ff6b9d);
    border-radius: 30px;
    z-index: -1;
    opacity: 0.3;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 80px;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const StatIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #7f8c8d;
  font-weight: 500;
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutHeader
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AboutTitle variants={itemVariants}>
            About <span>Luminary Beauty</span>
          </AboutTitle>
          <AboutSubtitle variants={itemVariants}>
            We are passionate about creating premium cosmetics that enhance your natural beauty 
            while maintaining the highest standards of quality and safety.
          </AboutSubtitle>
        </AboutHeader>

        <AboutContent>
          <AboutText
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants}>
              Crafting Beauty Since 2010
            </motion.h3>
            <motion.p variants={itemVariants}>
              At Luminary Beauty, we believe that every individual deserves to feel confident 
              and beautiful in their own skin. Our journey began with a simple mission: to create 
              cosmetics that not only enhance beauty but also nourish and protect the skin.
            </motion.p>
            <motion.p variants={itemVariants}>
              We source only the finest natural ingredients from around the world, ensuring that 
              every product meets our rigorous quality standards. Our formulations are developed 
              by expert chemists and dermatologists who understand the science of beauty.
            </motion.p>
            <motion.ul variants={itemVariants}>
              <li>100% Natural Ingredients</li>
              <li>Cruelty-Free & Vegan</li>
              <li>Dermatologist Tested</li>
              <li>Environmentally Conscious</li>
            </motion.ul>
          </AboutText>

          <AboutImage
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              background: `url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80') center/cover`,
              position: 'relative'
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.7), rgba(255, 142, 142, 0.7), rgba(255, 107, 157, 0.7))',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Cosmetic Products"
                style={{
                  width: '70%',
                  height: '70%',
                  objectFit: 'cover',
                  borderRadius: '15px'
                }}
              />
            </motion.div>
          </AboutImage>
        </AboutContent>

        <StatsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <StatCard variants={cardVariants}>
            <StatIcon>
              <FiHeart />
            </StatIcon>
            <StatNumber>50K+</StatNumber>
            <StatLabel>Happy Customers</StatLabel>
          </StatCard>

          <StatCard variants={cardVariants}>
            <StatIcon>
              <FiAward />
            </StatIcon>
            <StatNumber>15+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>

          <StatCard variants={cardVariants}>
            <StatIcon>
              <FiShield />
            </StatIcon>
            <StatNumber>100%</StatNumber>
            <StatLabel>Quality Assured</StatLabel>
          </StatCard>

          <StatCard variants={cardVariants}>
            <StatIcon>
              <FiUsers />
            </StatIcon>
            <StatNumber>200+</StatNumber>
            <StatLabel>Product Range</StatLabel>
          </StatCard>
        </StatsGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
