import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section {
    padding: 80px 0;
  }

  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
  }

  .section-subtitle {
    font-size: 1.1rem;
    text-align: center;
    color: #7f8c8d;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    .section {
      padding: 60px 0;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
`;

export default GlobalStyles;
