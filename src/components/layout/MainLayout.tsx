'use client';

import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import DevelopmentModal from '../ui/DevelopmentModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      
      <Footer />
      <DevelopmentModal />
    </div>
  );
}