'use client';

import { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'experience', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-neutral-900'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 md:h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Left */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold tracking-tighter font-display text-white hover:text-[#914110] transition-colors duration-300"
          >
            <span className="text-[#914110]">T</span>J
          </button>

          {/* Desktop Navigation - Right */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-800 hover:text-white focus:bg-neutral-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-neutral-400'
                    }`}
                  >
                    {item.label}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-neutral-900">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
