'use client';

import { motion } from 'motion/react';
export default function AboutSwiftography() {

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="theme-gradient-text">Swiftography</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            A personal journey from a simple HTML/CSS project to a modern web application,
            inspired by Taylor Swift&apos;s incredible musical evolution.
          </p>
        </motion.div>

        {/* Introduction & Purpose */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-surface rounded-2xl p-8 md:p-12 mb-16 border border-gray-200 dark:border-gray-700"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-4 text-textSecondary leading-relaxed text-justify">
              <p>
                Swiftography is more than just a fan website—it&apos;s a testament to growth,
                both as a developer and as a fan of Taylor Swift&apos;s music. What started as
                a 2nd-year web development final project using basic HTML and CSS has evolved
                into a modern, interactive web application built with Frameworks.
              </p>
              <p>
                This project serves as both a tribute to Taylor Swift&apos;s incredible discography
                and a showcase of my development journey. From the simple static pages of the
                original project to this dynamic, animated experience, Swiftography represents
                the evolution of web development itself.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text">
              Personal Touch
            </h3>
            <div className="space-y-4 text-textSecondary leading-relaxed text-justify">
              <p>
                Taylor Swift&apos;s music has been a constant source of inspiration throughout
                my development journey. Her ability to evolve and reinvent herself while staying
                true to her core values mirrors the growth I&apos;ve experienced as a developer.
              </p>
              <p>
                From her country roots to pop stardom, each album tells a story of transformation
                and growth—much like the journey from my first HTML/CSS project to this modern
                Next.js application. The themes, colors, and emotions in her music have directly
                influenced the design and user experience of Swiftography.
              </p>
              <p>
                This project is a celebration of that growth, both musical and technical.
                It&apos;s a way to honor an artist who has inspired millions while showcasing
                the evolution of web development technologies and my own skills as a developer.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text">
              Technical Evolution
            </h3>
            <div className="space-y-4 text-textSecondary leading-relaxed text-justify">
              <p>
                <strong>Original Project (2022):</strong> A simple HTML/CSS website with basic
                styling and static content. While functional, it lacked interactivity and
                modern design principles.
              </p>
              <p>
                <strong>Swiftography v2 (2025):</strong> A complete rebuild using modern
                technologies including Next.js, Tailwind CSS, and Motion.
              </p>
              <p>
                The improvements are substantial: responsive design, smooth animations,
                dynamic theming, interactive components, and a much more engaging user
                experience that truly captures the essence of each album era.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-surface rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">
              A Labor of Love
            </h3>
            <p className="text-lg text-textSecondary max-w-3xl mx-auto leading-relaxed text-center mb-6">
              Swiftography stands as both a heartfelt tribute to Taylor Swift&apos;s musical
              journey and a showcase of modern web development capabilities. It represents the
              intersection of passion for music and dedication to creating beautiful, functional
              web experiences.
            </p>
            <p className="text-textSecondary max-w-2xl mx-auto text-center">
              This project is a testament to how inspiration from art can drive technical
              innovation, and how personal growth can be reflected in the code we write.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}