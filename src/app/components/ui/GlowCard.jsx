'use client';

import React, { useRef, useState } from 'react';

export const GlowCard = ({ children, className = '', width, height }) => {
  const cardRef = useRef(null);
  const [borderShadow, setBorderShadow] = useState('0 0 0 rgba(0,0,0,0)');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Bordo con gradient simulato usando multiple shadows
    setBorderShadow(
      `0 0 10px #a855f7, 0 0 20px #6366f1, ${x / 10}px ${y / 10}px 30px rgba(168,85,247,0.5)`
    );
  };

  const handleMouseLeave = () => {
    setBorderShadow('0 0 0 rgba(0,0,0,0)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl transition-shadow duration-300 ${className}`}
      style={{
        width,
        height,
        boxShadow: borderShadow,
        border: '2px solid transparent', // bordo iniziale
      }}
    >
      <div className="rounded-2xl w-full h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
};
