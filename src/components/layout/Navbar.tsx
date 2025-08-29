'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { useTheme } from '@/lib/theme-context';

// Icon components using inline SVG
const Sun = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const Moon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Menu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

const Home = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
  </svg>
);

const User = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { currentTheme, themeMode, toggleThemeMode } = useTheme();

  // Navigation items with full names, mobile names, and icons
  const navItems = [
    { 
      href: '/', 
      label: 'Home',
      mobileLabel: 'Home',
      icon: Home,
      description: 'Welcome to Swiftography'
    },
    { 
      href: '/taylor-swift', 
      label: 'Taylor Swift',
      mobileLabel: 'TS',
      icon: User,
      description: 'Biography & Career'
    }
  ];

  // Use the theme system's mode instead of separate dark mode state
  const isDarkMode = themeMode === 'dark';

  // Close mobile menu when clicking outside or on link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // Check if current path is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative w-10 h-10 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div 
                  className="w-full h-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: currentTheme.gradient }}
                >
                  S
                </div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </motion.div>
              
              <div className="flex flex-col">
                <motion.span 
                  className="text-xl font-bold theme-gradient-text leading-none"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Swiftography
                </motion.span>
                <span className="text-xs text-textSecondary leading-none hidden sm:block">
                  Taylor Swift Universe
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = isActiveLink(item.href);
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 group flex items-center space-x-2 ${
                        isActive
                          ? 'text-white'
                          : 'text-text hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {/* Active background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-lg"
                          style={{ background: currentTheme.gradient }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      {/* Icon and Text */}
                      <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-white' : ''}`} />
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Dark/Light Mode Toggle */}
              <motion.button
                onClick={toggleThemeMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Theme Switcher */}
              <ThemeSwitcher />
            </div>

            {/* Mobile Menu Button & Theme Switcher */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Dark/Light Mode Toggle */}
              <motion.button
                onClick={toggleThemeMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Theme Switcher */}
              <ThemeSwitcher />

              {/* Hamburger Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40"
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg z-50"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="grid gap-2">
                  {navItems.map((item, index) => {
                    const isActive = isActiveLink(item.href);
                    const Icon = item.icon;
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group ${
                            isActive
                              ? 'text-white shadow-lg'
                              : 'text-text hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary'
                          }`}
                        >
                          {/* Active background */}
                          {isActive && (
                            <motion.div
                              layoutId="activeMobileTab"
                              className="absolute inset-0 rounded-xl"
                              style={{ background: currentTheme.gradient }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          
                          {/* Icon */}
                          <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'text-white' : ''}`} />
                          
                          {/* Text Content */}
                          <div className="flex flex-col relative z-10">
                            <span className="text-sm sm:text-base">
                              <span className="sm:hidden">{item.mobileLabel}</span>
                              <span className="hidden sm:inline">{item.label}</span>
                            </span>
                            <span className={`text-xs opacity-70 ${isActive ? 'text-white/80' : 'text-textSecondary'}`}>
                              {item.description}
                            </span>
                          </div>
                          
                          {/* Arrow indicator for active item */}
                          {isActive && (
                            <motion.div
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              className="ml-auto relative z-10"
                            >
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </motion.div>
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


    </>
  );
}