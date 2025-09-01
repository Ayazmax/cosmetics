import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiStar, FiEye } from 'react-icons/fi';

const ProductsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
`;

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ProductsHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const ProductsTitle = styled.h2`
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

const ProductsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const CategoryTab = styled(motion.button)`
  background: ${props => props.active ? 'linear-gradient(135deg, #ff6b6b, #ff8e8e)' : 'white'};
  color: ${props => props.active ? 'white' : '#2c3e50'};
  border: 2px solid ${props => props.active ? 'transparent' : 'rgba(255, 107, 107, 0.2)'};
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 8px 25px rgba(255, 107, 107, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.active ? '0 12px 35px rgba(255, 107, 107, 0.4)' : '0 8px 25px rgba(0, 0, 0, 0.15)'};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e, #ff6b9d);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`;

const ProductActions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ActionButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: #ff6b6b;
    color: white;
    transform: scale(1.1);
  }
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductCategory = styled.div`
  font-size: 0.9rem;
  color: #ff6b6b;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.2rem;
  color: #ffd700;
`;

const RatingText = styled.span`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Price = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
`;

const AddToCartButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
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

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'skincare', name: 'Skincare' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'fragrances', name: 'Fragrances' },
    { id: 'haircare', name: 'Hair Care' }
  ];

  const products = [
    {
      id: 1,
      name: 'Radiant Glow Serum',
      category: 'skincare',
      price: '$45.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Velvet Matte Lipstick',
      category: 'makeup',
      price: '$24.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Enchanted Rose Perfume',
      category: 'fragrances',
      price: '$89.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Hydrating Face Cream',
      category: 'skincare',
      price: '$38.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Volume Mascara',
      category: 'makeup',
      price: '$29.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Silk Hair Mask',
      category: 'haircare',
      price: '$34.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
    <ProductsSection id="products">
      <ProductsContainer>
        <ProductsHeader
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProductsTitle variants={itemVariants}>
            Our <span>Premium Products</span>
          </ProductsTitle>
          <ProductsSubtitle variants={itemVariants}>
            Discover our carefully curated collection of premium cosmetics that enhance your natural beauty
          </ProductsSubtitle>
        </ProductsHeader>

        <CategoryTabs>
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <AnimatePresence mode="wait">
          <ProductsGrid
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <ProductImage>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <ProductActions>
                    <ActionButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <FiHeart />
                    </ActionButton>
                    <ActionButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <FiEye />
                    </ActionButton>
                  </ProductActions>
                </ProductImage>
                
                <ProductInfo>
                  <ProductCategory>{product.category}</ProductCategory>
                  <ProductName>{product.name}</ProductName>
                  
                  <ProductRating>
                    <Stars>
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} fill={i < Math.floor(product.rating) ? "#ffd700" : "none"} />
                      ))}
                    </Stars>
                    <RatingText>({product.rating})</RatingText>
                  </ProductRating>
                  
                  <ProductPrice>
                    <Price>{product.price}</Price>
                    <AddToCartButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiShoppingCart />
                      Add to Cart
                    </AddToCartButton>
                  </ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductsGrid>
        </AnimatePresence>
      </ProductsContainer>
    </ProductsSection>
  );
};

export default Products;
