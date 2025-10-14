'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Heart, Coffee, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/severogianluca', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gianluca-severo-870631226/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/Gianlucasever0', label: 'X/Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/gianlucasevero/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:gianluca.severo@hotmail.com', label: 'Email' }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full backdrop-blur-md bg-slate-950/60 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Social Links */}
        <AnimatedContainer>
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={social.label}
              >
                <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all hover:scale-110">
                  <social.icon size={24} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </AnimatedContainer>

        {/* Divider */}
        <AnimatedContainer delay={0.2}>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-8"></div>
        </AnimatedContainer>

        {/* Copyright & Credits */}
        <AnimatedContainer delay={0.3}>
          <div className="text-center space-y-2">
            <p className="text-white/60 text-sm flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-400 animate-pulse" /> and <Coffee size={16} className="text-amber-400" /> by <span className="text-white font-medium">Gianluca Severo</span>
            </p>
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} • All rights reserved
            </p>
          </div>
        </AnimatedContainer>



      </div>
    </footer>
  );
}

function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
