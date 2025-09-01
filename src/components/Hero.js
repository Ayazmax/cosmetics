import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiStar } from 'react-icons/fi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.9) 0%, rgba(233, 236, 239, 0.9) 50%, rgba(222, 226, 230, 0.9) 100%), url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80') center/cover;
  padding-top: 80px;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  
  span {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e, #ff6b9d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroActions = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
  border: 2px solid rgba(255, 107, 107, 0.2);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff6b6b;
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
  }
`;

const HeroImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled(motion.div)`
  width: 400px;
  height: 500px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e, #ff6b9d);
  border-radius: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(255, 107, 107, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e, #ff6b9d);
    border-radius: 40px;
    z-index: -1;
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 400px;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FloatingIcon = styled(FloatingElement)`
  width: 60px;
  height: 60px;
  top: -30px;
  right: -30px;
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  color: white;
  font-size: 1.5rem;
`;

const FloatingText = styled(FloatingElement)`
  width: 120px;
  height: 40px;
  bottom: -20px;
  left: -20px;
  background: white;
  color: #2c3e50;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 20px;
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
`;

// eslint-disable-next-line no-unused-vars
const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 142, 142, 0.1));
`;

const Hero = () => {
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <HeroSection id="home">
      <BackgroundElements>
        <motion.div
          style={{ 
            width: '200px', 
            height: '200px', 
            top: '10%', 
            left: '5%',
            position: 'absolute',
            borderRadius: '50%',
            overflow: 'hidden',
            opacity: 0.1
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
            alt="Beauty"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        <motion.div
          style={{ 
            width: '150px', 
            height: '150px', 
            top: '60%', 
            right: '10%',
            position: 'absolute',
            borderRadius: '50%',
            overflow: 'hidden',
            opacity: 0.1
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1487412912498-044bb8bcaaa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
            alt="Makeup"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
        <motion.div
          style={{ 
            width: '100px', 
            height: '100px', 
            bottom: '20%', 
            left: '15%',
            position: 'absolute',
            borderRadius: '50%',
            overflow: 'hidden',
            opacity: 0.1
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
            alt="Perfume"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
      </BackgroundElements>

      <HeroContainer>
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Badge variants={itemVariants}>
            <FiStar />
            Premium Quality
          </Badge>
          
          <Title variants={itemVariants}>
            Discover Your <span>Natural Beauty</span>
          </Title>
          
          <Subtitle variants={itemVariants}>
            Experience the finest collection of premium cosmetics that enhance your natural beauty. 
            Made with love and the highest quality ingredients.
          </Subtitle>
          
          <HeroActions variants={itemVariants}>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
              <FiArrowRight />
            </PrimaryButton>
            
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPlay />
              Watch Video
            </SecondaryButton>
          </HeroActions>
        </HeroContent>

        <HeroImage>
          <MainImage
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{
              background: `url('https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80') center/cover`,
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
                background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.8), rgba(255, 142, 142, 0.8), rgba(255, 107, 157, 0.8))',
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Beauty Products"
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </motion.div>
            
            <FloatingIcon
              variants={floatVariants}
              animate="animate"
            >
              <FiStar />
            </FloatingIcon>
            
            <FloatingText
              variants={floatVariants}
              animate="animate"
            >
              Natural
            </FloatingText>
          </MainImage>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
