import React from 'react';
import { motion } from 'framer-motion';
import InfiniteMenu from './InfiniteMenu';
import Galaxy from './Galaxy';

const items = [
  {
    image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082714/WhatsApp_Image_2025-03-27_at_19.04.38_1_plfgii.jpg',
    link: '/Gallery',
    title: '2025',
    description: 'Moments from our journey'
  },
  {
    image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082715/WhatsApp_Image_2025-03-27_at_19.04.40_r6nnys.jpg',
    link: '/Gallery',
    title: '2025',
    description: 'Team Abraxas in action'
  },
  {
    image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082717/WhatsApp_Image_2025-03-27_at_19.04.32_1_wrbqpk.jpg',
    link: '/Gallery',
    title: '2025',
    description: 'Built by curious minds'
  },
  {
    image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791111/ABRAXAS-Gallery24/ooc5jgmm8myaieky4pbt.jpg',
    link: '/Gallery',
    title: '2024',
    description: 'Innovision 2024'
  },
  {
    image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791095/ABRAXAS-Gallery24/wamjxelybf8wcyl6dico.jpg',
    link: '/Gallery',
    title: '2024',
    description: 'Projects & experiments'
  },
  {
    image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791271/ABRAXAS-Gallery24/j8l7cfxtxgiitoxbh4qz.jpg',
    link: '/Gallery',
    title: '2024',
    description: 'Physics in practice'
  },
  {
    image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786020/ABRAXAS-Gallery/p4bfierd3hosdoawdzsy.jpg',
    link: '/Gallery',
    title: '2023',
    description: 'Where it all began'
  },
  {
    image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786046/ABRAXAS-Gallery/czvg2fqh4pvsxnkezygo.jpg',
    link: '/Gallery',
    title: '2023',
    description: 'First chapter'
  },
];

const GlobeGallery = () => {
  return (
    <div className="bg-black py-16 px-4">
      {/* Header */}
      <motion.h2
        style={{ fontFamily: "'Syne', sans-serif" }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 text-center tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Our Moments
      </motion.h2>

      <motion.div
        className="w-12 h-px bg-white/20 mx-auto mb-3"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <motion.p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-center text-white/40 text-base sm:text-lg mb-8 font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Drag to explore our journey
      </motion.p>

      {/* Globe */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          height: '600px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
          border: '1px solid rgba(255, 255, 255, 0.07)',
        }}
      >
        {/* Galaxy background layer */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={2}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.8}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
            transparent={false}
          />
        </div>

        {/* InfiniteMenu on top */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <InfiniteMenu items={items} scale={1} />
        </div>
      </motion.div>
    </div>
  );
};

export default GlobeGallery;