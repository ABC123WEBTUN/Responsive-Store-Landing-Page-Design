import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

/**
 * Main App Component
 * 
 * This is the root component that renders the complete responsive store landing page.
 * The page includes:
 * - Header with responsive navigation
 * - Hero section with call-to-action
 * - Products showcase section
 * - Footer with company information and links
 * 
 * The design is fully responsive and optimized for mobile, tablet, and desktop viewing.
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Header Component - Sticky navigation with mobile menu */}
      <Header />
      
      {/* Hero Section - Main banner with promotional content */}
      <Hero />
      
      {/* Products Section - Featured product showcase */}
      <Products />
      
      {/* Footer Component - Company info, links, and contact details */}
      <Footer />
    </div>
  );
}

export default App;