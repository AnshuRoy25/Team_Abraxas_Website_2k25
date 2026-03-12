import React from 'react';
import { motion } from 'framer-motion';
import InfiniteMenu from './InfiniteMenu';

const items = [
  // 2025
  { image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082714/WhatsApp_Image_2025-03-27_at_19.04.38_1_plfgii.jpg', link: '/Gallery', title: '2025', description: 'Moments from our journey' },
  { image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082715/WhatsApp_Image_2025-03-27_at_19.04.40_r6nnys.jpg', link: '/Gallery', title: '2025', description: 'Team Abraxas in action' },
  { image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082717/WhatsApp_Image_2025-03-27_at_19.04.32_1_wrbqpk.jpg', link: '/Gallery', title: '2025', description: 'Built by curious minds' },
  { image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.33_v61wkt.jpg', link: '/Gallery', title: '2025', description: 'Physics in practice' },
  { image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.32_2_syh2b7.jpg', link: '/Gallery', title: '2025', description: 'Exploring boundaries' },
  { image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082715/WhatsApp_Image_2025-03-27_at_19.04.35_1_ktbqqe.jpg', link: '/Gallery', title: '2025', description: 'Together we build' },
  { image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.37_mg9xlk.jpg', link: '/Gallery', title: '2025', description: 'Innovision 2025' },
  { image: 'https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.34_2_bdccj0.jpg', link: '/Gallery', title: '2025', description: 'Experiments & ideas' },
  // 2024
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791111/ABRAXAS-Gallery24/ooc5jgmm8myaieky4pbt.jpg', link: '/Gallery', title: '2024', description: 'Innovision 2024' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791095/ABRAXAS-Gallery24/wamjxelybf8wcyl6dico.jpg', link: '/Gallery', title: '2024', description: 'Projects & experiments' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791271/ABRAXAS-Gallery24/j8l7cfxtxgiitoxbh4qz.jpg', link: '/Gallery', title: '2024', description: 'Physics in practice' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791253/ABRAXAS-Gallery24/ndakojgncvvfzoxxvkgi.jpg', link: '/Gallery', title: '2024', description: 'Team at work' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791133/ABRAXAS-Gallery24/bbziza0ffuqnqhrg3re5.jpg', link: '/Gallery', title: '2024', description: 'Curious minds' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791241/ABRAXAS-Gallery24/hpopde3httnqpyvnwn2o.jpg', link: '/Gallery', title: '2024', description: 'Building the future' },
  // 2023
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786020/ABRAXAS-Gallery/p4bfierd3hosdoawdzsy.jpg', link: '/Gallery', title: '2023', description: 'Where it all began' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786046/ABRAXAS-Gallery/czvg2fqh4pvsxnkezygo.jpg', link: '/Gallery', title: '2023', description: 'First chapter' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786102/ABRAXAS-Gallery/isrmwvh6wrzphavwqwz0.jpg', link: '/Gallery', title: '2023', description: 'The beginning' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786158/ABRAXAS-Gallery/wwfnjka7a7f79sms8k3h.jpg', link: '/Gallery', title: '2023', description: 'Early days' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786128/ABRAXAS-Gallery/c8bzhu4vs5q7pac4lhg7.jpg', link: '/Gallery', title: '2023', description: 'Laying foundations' },
  { image: 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786235/ABRAXAS-Gallery/rg85siezkcvt2bqp0wvz.jpg', link: '/Gallery', title: '2023', description: 'Together from the start' },
];

const GlobeGallery = () => {
  return (
    <div className="bg-black py-16 px-4">
      <motion.h2
        style={{ fontFamily: "'Syne', sans-serif" }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 text-center tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Our Universe's
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            height: '600px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            background: '#000',
          }}
        >
          <InfiniteMenu items={items} scale={1} />
        </div>

        <a
          href="/Gallery"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 px-4 py-2
            bg-black/70 border border-white/25 rounded-xl text-white/70 text-xs font-medium
            hover:bg-white/10 hover:text-white hover:border-white/50
            backdrop-blur-sm transition-all duration-300"
        >
          Explore More
        </a>
      </motion.div>
    </div>
  );
};

export default GlobeGallery;