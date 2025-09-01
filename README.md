# Luminary Beauty - Cosmetics Portfolio Website

A beautiful and interactive portfolio website for a cosmetics company built with React JS.

## Features

- **Modern Design**: Clean white and grey background with vibrant accent colors
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Crispy animations using Framer Motion
- **Interactive Elements**: Engaging user experience with hover effects
- **Professional Look**: Attractive design suitable for cosmetics industry

## Sections

- **Hero**: Eye-catching landing section with call-to-action
- **About**: Company information and statistics
- **Products**: Showcase of cosmetic products with filtering
- **Services**: Premium services offered by the company
- **Contact**: Contact form and information
- **Footer**: Comprehensive footer with links and newsletter

## Technologies Used

- **React 18**: Modern React with hooks
- **Styled Components**: CSS-in-JS for styling
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library for UI elements
- **React Router DOM**: Navigation and routing

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ayazmax/cosmetics.git
cd cosmetics
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Deployment

This project is configured for automatic deployment to Contabo VPS using GitHub Actions.

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file automatically:
- Builds the project on push to main branch
- Deploys to Contabo VPS
- Installs dependencies
- Builds the production version
- Restarts the application

### Manual Deployment to Contabo VPS

1. **Connect to VPS:**
```bash
ssh root@147.78.131.10
```

2. **Navigate to project directory:**
```bash
cd /var/www/cosmetics
```

3. **Install dependencies:**
```bash
npm install
```

4. **Build project:**
```bash
npm run build
```

5. **Start with PM2:**
```bash
pm2 start npm --name "cosmetics" -- start
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Products.js     # Products showcase
│   ├── Services.js     # Services section
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── styles/             # Global styles
│   └── GlobalStyles.js # Global CSS and styled components
├── App.js              # Main app component
└── index.js            # Entry point
```

## Company Information

**Luminary Beauty** - A premium cosmetics company offering high-quality products and professional services.

## License

This project is private and proprietary.

---

**Last Updated**: September 1, 2025 - Deployment test
