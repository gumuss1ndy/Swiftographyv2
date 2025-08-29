'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                className="w-8 h-8 rounded-full theme-gradient"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <span className="text-xl font-bold theme-gradient-text">
                Swiftography
              </span>
            </Link>
            <p className="text-textSecondary max-w-md">
              A fan-made tribute to Taylor Swift&apos;s incredible discography. 
              Explore her albums, themes, and musical journey through the years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-textSecondary hover:text-primary transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/taylor-swift"
                  className="text-textSecondary hover:text-primary transition-colors duration-200"
                >
                  About Taylor
                </Link>
              </li>
              <li>
                <Link
                  href="/album/debut"
                  className="text-textSecondary hover:text-primary transition-colors duration-200"
                >
                  Albums
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-text font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://taylorswift.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-primary transition-colors duration-200"
                >
                  Official Site
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/taylorswift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-primary transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/taylorswift13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-primary transition-colors duration-200"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Development Status */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">
              🚧 Site Under Development
            </span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-3">
            Features are being added and refined. Some content may be incomplete.
          </p>
          <div className="text-center">
            <button
              onClick={() => {
                localStorage.removeItem('hasSeenDevelopmentModal');
                window.location.reload();
              }}
              className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 underline"
            >
              Show development info again
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textSecondary text-sm">
            © {currentYear} Swiftography. This is a fan-made website and is not affiliated with Taylor Swift or her team.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-textSecondary hover:text-primary text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-textSecondary hover:text-primary text-sm transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}