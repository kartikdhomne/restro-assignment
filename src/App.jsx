import React, { useState } from 'react';
import HeroCarousel from './components/HeroCarousel';
import ProductCarousel from './components/ProductCarousel';
import Logo from './assets/logo.png'; 
import Footer from './components/Footer';
import Contact from './components/Contact';

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '#blog' },
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 z-10 transition-width duration-300 ${
          isMenuOpen ? 'w-80' : 'w-20'
        }`}
      >
        <button
          className="text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Logo placed above the menu items */}
        {isMenuOpen && (
          <div className="flex flex-col items-center mt-4">
            <img src={Logo} alt="Logo" className="w-60 h-40 mb-4" />
            <ul className="space-y-2 text-white">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block p-2 hover:bg-gray-700 hover:text-yellow-400 uppercase"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <HeroCarousel />

      {/* Product Carousel */}
      <div className="mt-5">
        <ProductCarousel />
      </div>

      {/* Contact */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;
