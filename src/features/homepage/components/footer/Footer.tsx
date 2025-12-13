'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FooterShape } from './partials/FooterShape';
import { FooterContent } from './partials/FooterContent';

export const Footer = () => {
  return (
    <footer className="relative w-full z-10">
      
      <FooterShape />
      
      <div className="-mt-[1px] relative z-30">
        <FooterContent />
      </div>

    </footer>
  );
};
export default Footer;