import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = ({
  borderColor = '#0A84FF',
  glowColor = 'rgba(10, 132, 255, 0.6)'
}) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      // Check if hovering over a clickable element
      const target = e.target;
      const computedStyle = window.getComputedStyle(target);
      const isClickable = 
        computedStyle.cursor === 'pointer' ||
        target.closest('a') ||
        target.closest('button');
        
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="custom-cursor-frame"
      animate={{
        x: position.x - (isPointer ? 24 : 14),
        y: position.y - (isPointer ? 24 : 14),
        width: isPointer ? 48 : 28,
        height: isPointer ? 48 : 28,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
        mass: 0.5
      }}
      style={{
        '--border-color': borderColor,
        '--glow-color': glowColor
      }}
    >
      <span className="cursor-corner top-left"></span>
      <span className="cursor-corner top-right"></span>
      <span className="cursor-corner bottom-left"></span>
      <span className="cursor-corner bottom-right"></span>
    </motion.div>
  );
};

export default CustomCursor;
