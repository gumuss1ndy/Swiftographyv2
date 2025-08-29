'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function DevelopmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenDevelopmentModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenDevelopmentModal', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 250 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-lg">
              
              {/* Header */}
              <div className="p-5 border-b border-neutral-200 dark:border-neutral-700 text-center">
                <h2 className="text-lg font-semibold">Under Development</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Swiftography is still being built
                </p>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                  Welcome to Swiftography! This site is currently under active
                  development. Some features may be incomplete or change as we
                  continue building.
                </p>

                <ul className="text-sm text-neutral-500 dark:text-neutral-400 space-y-2">
                  <li>• Album pages are being refined</li>
                  <li>• New features coming soon</li>
                  <li>• Mobile experience being optimized</li>
                </ul>
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-neutral-200 dark:border-neutral-700">
                <button
                  onClick={handleClose}
                  className="w-full py-2 rounded-md border border-neutral-400 dark:border-neutral-600 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                >
                  Got it! Let&apos;s explore
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
