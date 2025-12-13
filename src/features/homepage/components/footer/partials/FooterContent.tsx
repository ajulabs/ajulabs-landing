'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { useI18n } from '@/lib/i18n/context';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { 
    opacity: 1
  },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.4,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1.0]
    } 
  }
};

export const FooterContent = () => {
  const { t } = useI18n();

  return (
    <motion.div 
      className="w-full bg-white relative z-20 -mt-1 pt-4 pb-0 min-h-[500px] md:min-h-[600px] flex flex-col justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
    >
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 w-full flex-grow flex flex-col justify-between">
    
        <div className="flex flex-col md:flex-row justify-between items-start pt-4 md:pt-8 mb-10">
          
          <motion.div 
            className="mb-10 md:mb-0 relative z-30"
            variants={itemVariants}
          >
            <Image 
              src="/logo-ajulabs.png" 
              alt="AjuLabs"
              width={158} 
              height={43} 
              className="w-[158px] h-[43px] object-contain"
              priority
            />
          </motion.div>

          <div className="flex flex-col gap-8 items-start w-full md:w-auto relative z-30">
            
            <motion.div 
              className="flex flex-wrap gap-6"
              variants={itemVariants}
            >
              <SocialIcon icon={<Instagram size={18} />} label="Instagram" />
              <SocialIcon icon={<Linkedin size={18} />} label="Linkedin" />
              <SocialIcon icon={<FaTiktok size={18} />} label="Tiktok" />
            </motion.div>

            <motion.div 
              className="text-left space-y-4"
              variants={itemVariants}
            >
              <p className="text-[#1B1B1B] md:text-[16px] footer-font font-normal tracking-[0.02em] uppercase">
                {t.footer.commercial}
              </p>
              
              <div className="flex flex-col gap-0">
                <span className="text-[#1B1B1B] text-[16px] footer-font font-normal mb-1 tracking-[-0.02em]">
                  {t.footer.emailLabel}
                </span>
                <a href="mailto:contato@ajulabs.com" className="text-[#1B1B1B]/40 text-[16px] md:text-[15px] footer-font font-normal tracking-[-0.02em] hover:text-orange-500 transition-colors">
                  contato@ajulabs.com
                </a>
              </div>

              <div className="flex flex-col gap-0">
                <span className="text-[#1B1B1B] text-[16px] footer-font font-normal mb-1 tracking-[-0.02em]">
                  {t.footer.whatsappLabel}
                </span>
                <a href="https://wa.me/5579999999999" className="text-[#1B1B1B]/40 text-[16px] md:text-[15px] footer-font font-normal tracking-[-0.02em] hover:text-orange-500 transition-colors">
                  +55 (79) 99999-9999
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        <motion.div 
          className="
            w-full border-t border-gray-100 
            flex flex-col md:flex-row justify-between items-center
            footer-font font-normal text-[#676767] text-[12px] uppercase tracking-[-0.02em]
            h-auto py-4 gap-3
            lg:h-[30px] lg:py-0 lg:gap-0
          "
          variants={itemVariants}
        >
            
            <div className="flex items-center gap-6">
              <span className="footer-font font-normal uppercase tracking-[-0.02em]">AjuLabs</span>
              <span className="w-1 h-1 rounded-full bg-[#676767]"></span>
              <span>{t.footer.rights}</span>
              <span className="w-1 h-1 rounded-full bg-[#676767]"></span>
              <a href="#" className="hover:text-orange-500 transition-colors">
                {t.footer.legal}
              </a>
            </div>

            <p className="text-center md:text-right footer-font font-normal">
              {t.footer.madeBy}
            </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SocialIcon = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <a 
    href="#" 
    aria-label={label}
    className="group flex items-center gap-3"
  >
    <div className="
      flex items-center justify-center 
      w-8 h-8 rounded-full border border-[#E5E7EB] 
      text-[#1B1B1B]
      transition-all duration-300
      group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500
    ">
      {icon}
    </div>

    <span className="
      text-[#1B1B1B]
      text-[16px] footer-font font-normal
      transition-colors duration-300
    ">
      {label}
    </span>
  </a>
);