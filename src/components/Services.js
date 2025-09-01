import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiScissors, FiUser, FiTruck, FiHeadphones, FiGift, FiShield } from 'react-icons/fi';

const ServicesSection = styled.section`
  padding: 100px 0;
  background: white;
  position: relative;
  overflow: hidden;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const ServicesTitle = styled.h2`
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

const ServicesSubtitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    transform: rotate(45deg);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: rotate(45deg) translate(50%, 50%);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;

  &::before {
    content: '✓';
    color: #ff6b6b;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const CTA = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
  }
`;

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FiScissors />,
      title: 'Beauty Consultation',
      description: 'Get personalized beauty advice from our expert consultants who understand your unique style and preferences.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      features: [
        'Personalized recommendations',
        'Skin type analysis',
        'Product matching',
        'Follow-up support'
      ]
    },
    {
      id: 2,
      icon: <FiUser />,
      title: 'Professional Makeup',
      description: 'Transform your look with our professional makeup artists for special occasions and events.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      features: [
        'Special event makeup',
        'Bridal services',
        'Professional techniques',
        'Long-lasting results'
      ]
    },
    {
      id: 3,
      icon: <FiTruck />,
      title: 'Fast Delivery',
      description: 'Enjoy quick and reliable delivery of your favorite products right to your doorstep.',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      features: [
        'Same-day delivery',
        'Free shipping over $50',
        'Real-time tracking',
        'Secure packaging'
      ]
    },
    {
      id: 4,
      icon: <FiHeadphones />,
      title: '24/7 Support',
      description: 'Our customer support team is always here to help you with any questions or concerns.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      features: [
        'Round-the-clock support',
        'Multiple contact methods',
        'Expert assistance',
        'Quick response time'
      ]
    },
    {
      id: 5,
      icon: <FiGift />,
      title: 'Loyalty Program',
      description: 'Earn points with every purchase and enjoy exclusive rewards and special offers.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      features: [
        'Points accumulation',
        'Exclusive discounts',
        'Birthday rewards',
        'VIP benefits'
      ]
    },
    {
      id: 6,
      icon: <FiShield />,
      title: 'Quality Guarantee',
      description: 'We stand behind the quality of our products with a comprehensive satisfaction guarantee.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      features: [
        '30-day returns',
        'Quality assurance',
        'Authenticity guarantee',
        'Customer satisfaction'
      ]
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <ServicesSection id="services">
      <ServicesContainer>
        <ServicesHeader
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesTitle variants={itemVariants}>
            Our <span>Premium Services</span>
          </ServicesTitle>
          <ServicesSubtitle variants={itemVariants}>
            We offer comprehensive beauty services to enhance your experience and help you achieve your beauty goals
          </ServicesSubtitle>
        </ServicesHeader>

        <ServicesGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              style={{
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('${service.image}') center/cover`,
                position: 'relative'
              }}
            >
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <ServiceFeature key={index}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTA
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CTATitle variants={itemVariants}>
            Ready to Transform Your Beauty Routine?
          </CTATitle>
          <CTADescription variants={itemVariants}>
            Join thousands of satisfied customers who have discovered their perfect beauty products with Luminary Beauty
          </CTADescription>
          <CTAButton
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </CTAButton>
        </CTA>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
