import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineData = [
  { month: 'Oct 2025', day: '3', title: 'Sophomore Interviews', subtitle: '' },
  { month: 'Jan 2026', day: '16', title: 'Nimbus Orientation', subtitle: 'Introducing Abraxas to Freshmen' },
  { month: 'Jan 2026', day: '17–18', title: 'Freshmen Interviews', subtitle: '' },
  { month: 'Feb 2026', day: '15', title: 'Innovision', subtitle: '' },
  { month: 'Mar 2026', day: '11', title: 'Game Theory Workshop', subtitle: '' },
  { month: 'Apr 2026', day: '', title: 'To be Announced', subtitle: '' },
];

const Card = ({ item }) => (
  <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.07] transition-all duration-300 w-full">
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white/40 text-xs mb-2 tracking-widest uppercase">
      {item.month}
    </div>
    {item.day && (
      <div style={{ fontFamily: "'Syne', sans-serif" }} className="text-white text-3xl font-bold leading-none mb-2">
        {item.day}
      </div>
    )}
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white/90 text-sm font-medium leading-snug">
      {item.title}
    </div>
    {item.subtitle && (
      <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white/30 text-xs mt-1 leading-snug">
        {item.subtitle}
      </div>
    )}
  </div>
);

const MobileTimeline = () => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/15" />
    <div className="space-y-8">
      {timelineData.map((item, index) => {
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Card item={item} />
          </motion.div>
        );
      })}
    </div>
  </div>
);

const DesktopTimeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const STEM = 32;

  return (
    <div ref={ref} className="relative">
      <div className="flex justify-between gap-4 items-end mb-0">
        {timelineData.map((item, index) => {
          const isTop = index % 2 === 0;
          const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.2 });
          return (
            <div key={index} ref={cardRef} className="flex-1 min-w-0 flex flex-col items-center">
              {isTop ? (
                <>
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: -20 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card item={item} />
                  </motion.div>
                  <div className="w-px bg-white/20" style={{ height: `${STEM}px` }} />
                </>
              ) : (
                <div style={{ height: `${STEM}px` }} />
              )}
            </div>
          );
        })}
      </div>

      <motion.div
        className="w-full h-px bg-white/20"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ transformOrigin: 'left' }}
      />

      <div className="flex justify-between gap-4 items-start mt-0">
        {timelineData.map((item, index) => {
          const isBottom = index % 2 !== 0;
          const [cardRef, cardInView] = useInView({ triggerOnce: true, threshold: 0.2 });
          return (
            <div key={index} ref={cardRef} className="flex-1 min-w-0 flex flex-col items-center">
              {isBottom ? (
                <>
                  <div className="w-px bg-white/20" style={{ height: `${STEM}px` }} />
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card item={item} />
                  </motion.div>
                </>
              ) : (
                <div style={{ height: `${STEM}px` }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Timeline = () => (
  <div className="bg-black pt-24 pb-16 px-4 md:px-8 overflow-x-hidden">
    <motion.h2
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-3 text-center px-4 tracking-tight"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Timeline
    </motion.h2>
    <motion.div
      className="w-12 h-px bg-white/20 mx-auto mb-3"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    />
    <motion.p
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="text-center text-white/40 text-base sm:text-lg md:text-xl mb-12 px-4 font-light"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Our journey through the year
    </motion.p>

    <div className="block md:hidden max-w-sm mx-auto">
      <MobileTimeline />
    </div>

    <div className="hidden md:block max-w-6xl mx-auto">
      <DesktopTimeline />
    </div>
  </div>
);

export default Timeline;