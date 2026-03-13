import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

  const galleryData = {
    "2026": [
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773325799/IMG_1784_f5mv1w.jpg",
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773325802/IMG_1793_plkxcd.jpg",

      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773331475/WhatsApp_Image_2026-03-12_at_9.32.57_PM_fzvij5.jpg",

      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773331475/WhatsApp_Image_2026-03-12_at_9.32.56_PM_egws8f.jpg",
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773331489/WhatsApp_Image_2026-03-12_at_9.32.59_PM_ztwdia.jpg",
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773331552/WhatsApp_Image_2026-03-12_at_9.33.48_PM_tpc91k.jpg",
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773318770/IMG_0419_i69crh.jpg",
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773318786/IMG_0425_tp7ole.jpg",
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773318783/IMG_0421_xapnel.jpg",
      
       "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773332042/WhatsApp_Image_2026-03-12_at_9.42.38_PM_lpnzx6.jpg",
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773332044/WhatsApp_Image_2026-03-12_at_9.42.38_PM_2_t34nmi.jpg",
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773332035/WhatsApp_Image_2026-03-12_at_9.42.39_PM_rannaw.jpg",
      "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773332027/WhatsApp_Image_2026-03-12_at_9.42.38_PM_1_zr380w.jpg",
     

  ],  
  "2025": [
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269372/Screenshot_20250131-015950_Photos_uhykne.jpg",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269371/Screenshot_20250131-015927_Photos_l0uv7j.png",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269372/Screenshot_20250131-020027_Photos_zxmpqf.png",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082714/WhatsApp_Image_2025-03-27_at_19.04.38_1_plfgii.jpg",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082714/WhatsApp_Image_2025-03-27_at_19.04.38_xlyv3m.jpg",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082715/WhatsApp_Image_2025-03-27_at_19.04.40_r6nnys.jpg",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082717/WhatsApp_Image_2025-03-27_at_19.04.32_1_wrbqpk.jpg",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.33_v61wkt.jpg",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.32_2_syh2b7.jpg",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082715/WhatsApp_Image_2025-03-27_at_19.04.35_1_ktbqqe.jpg",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082715/WhatsApp_Image_2025-03-27_at_19.04.37_1_htpwyt.jpg",
    "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.37_mg9xlk.jpg",
  ],
  "2024": [
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791111/ABRAXAS-Gallery24/ooc5jgmm8myaieky4pbt.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791095/ABRAXAS-Gallery24/wamjxelybf8wcyl6dico.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791271/ABRAXAS-Gallery24/j8l7cfxtxgiitoxbh4qz.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791253/ABRAXAS-Gallery24/ndakojgncvvfzoxxvkgi.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791133/ABRAXAS-Gallery24/bbziza0ffuqnqhrg3re5.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791241/ABRAXAS-Gallery24/hpopde3httnqpyvnwn2o.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791127/ABRAXAS-Gallery24/fldhgtujt5fc4npg8bcq.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791081/ABRAXAS-Gallery24/s5zbyqui5zv3b0dfbxbj.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791050/ABRAXAS-Gallery24/ou0mggpmpie6nxze3fvy.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791047/ABRAXAS-Gallery24/vqtswrd0uiia6vuijaxy.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791263/ABRAXAS-Gallery24/tde9p4okprtudkcaazre.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791066/ABRAXAS-Gallery24/yyqwf9x1uymoxz7fnsdk.jpg",
  ],
  "2023": [
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786020/ABRAXAS-Gallery/p4bfierd3hosdoawdzsy.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786006/ABRAXAS-Gallery/da1doedbfe6wfipyavmj.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786046/ABRAXAS-Gallery/czvg2fqh4pvsxnkezygo.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786102/ABRAXAS-Gallery/isrmwvh6wrzphavwqwz0.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786158/ABRAXAS-Gallery/wwfnjka7a7f79sms8k3h.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786128/ABRAXAS-Gallery/c8bzhu4vs5q7pac4lhg7.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786235/ABRAXAS-Gallery/rg85siezkcvt2bqp0wvz.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786260/ABRAXAS-Gallery/tepp6edaclwjozdlka9c.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786197/ABRAXAS-Gallery/fk5bva4o27pzmhpkasms.jpg",
    "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786189/ABRAXAS-Gallery/jkxzltsyrq2ougu3g7yx.jpg",
  ],

};

// ── 3D Ring Carousel ──────────────────────────────────────────
const RingCarousel = ({ images, onImageClick }) => {
  const count     = images.length;
  const angleStep = 360 / count;
  const radius    = Math.round((220 / 2) / Math.tan(Math.PI / count)) + 60;

  const rotY        = useRef(0);
  const targetY     = useRef(0);
  const velocity    = useRef(0);
  const rafId       = useRef(null);
  const ringRef     = useRef(null);
  const sectionRef  = useRef(null);
  const locked      = useRef(false);       // true = scroll is hijacked
  const scrollStart = useRef(0);           // pageY when touch started
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const applyRotation = (deg) => {
    if (ringRef.current) {
      ringRef.current.style.transform = `rotateY(${deg}deg)`;
    }
  };

  const inertiaLoop = () => {
    velocity.current *= 0.88;
    targetY.current  += velocity.current;
    rotY.current     += (targetY.current - rotY.current) * 0.1;
    applyRotation(rotY.current);
    if (Math.abs(velocity.current) > 0.05) {
      rafId.current = requestAnimationFrame(inertiaLoop);
    }
  };

  const spinBy = (delta) => {
    cancelAnimationFrame(rafId.current);
    velocity.current  = delta * 0.4;
    targetY.current  += delta * 0.4;
    rotY.current      = targetY.current;
    applyRotation(rotY.current);
    rafId.current = requestAnimationFrame(inertiaLoop);
  };
  const lastTouchX = useRef(0);

const onTouchStart = (e) => {
  lastTouchX.current = e.touches[0].clientX;
  velocity.current = 0;
  cancelAnimationFrame(rafId.current);
};

const onTouchMove = (e) => {
  const cx = e.touches[0].clientX;
  const delta = cx - lastTouchX.current;
  lastTouchX.current = cx;
  velocity.current = delta * 0.3;
  targetY.current += delta * 0.3;
  rotY.current = targetY.current;
  applyRotation(rotY.current);
};

const onTouchEnd = () => {
  rafId.current = requestAnimationFrame(inertiaLoop);
};

  // ── Desktop: wheel hijack ──────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
      if (!inView) return;

      e.preventDefault();
      // deltaY > 0 = scroll down = spin right
      spinBy(e.deltaY * 0.1);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  // ── Mobile: touch hijack ───────────────────────────────────

  useEffect(() => {
    rotY.current     = 0;
    targetY.current  = 0;
    velocity.current = 0;
    applyRotation(0);
    return () => cancelAnimationFrame(rafId.current);
  }, [images]);

  if (count === 0) return null;

  return (
    <div
      ref={sectionRef}
       onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        width:           '100%',
        height:          '380px',
        perspective:     '1800px',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        overflow:        'visible',
        userSelect:      'none',
        WebkitUserSelect:'none',
      }}
    >
      {/* Ring wrapper — only this rotates */}
      <div
        ref={ringRef}
        style={{
          position:       'relative',
          width:          '220px',
          height:         '260px',
          transformStyle: 'preserve-3d',
          transform:      'rotateY(0deg)',
        }}
      >
        {images.map((src, i) => (
          <div
            key={src + i}
            onClick={() => {
              if (window.innerWidth >= 768) onImageClick(src, i);
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              position:                 'absolute',
              width:                    '220px',
              height:                   '260px',
              top:                      0,
              left:                     0,
              borderRadius:             '14px',
              overflow:                 'hidden',
              border:                   hoveredIndex === i
                ? '1px solid rgba(255,255,255,0.25)'
                : '1px solid rgba(255,255,255,0.08)',
              backfaceVisibility:       'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform:                `rotateY(${i * angleStep}deg) translateZ(${radius}px)${hoveredIndex === i ? ' translateY(-12px) scale(1.06)' : ''}`,
              cursor:                   'pointer',
              boxShadow:                hoveredIndex === i
                ? '0 30px 80px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.07)'
                : '0 20px 60px rgba(0,0,0,0.8)',
              transition:               'transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease, border 0.3s ease',
            }}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              draggable={false}
              style={{
                width:         '100%',
                height:        '100%',
                objectFit:     'cover',
                display:       'block',
                pointerEvents: 'none',
                userSelect:    'none',
                transform:     hoveredIndex === i ? 'scale(1.08)' : 'scale(1)',
                transition:    'transform 0.5s ease',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Main Gallery ──────────────────────────────────────────────
const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [lightbox, setLightbox]         = useState(null);
  const [direction, setDirection]       = useState(1);

  const images = galleryData[selectedYear] || [];

  const openLightbox  = (src, index) => setLightbox({ src, index });
  const closeLightbox = () => setLightbox(null);

  const prevImage = (e) => {
    e?.stopPropagation();
    setDirection(-1);
    const ni = (lightbox.index - 1 + images.length) % images.length;
    setLightbox({ src: images[ni], index: ni });
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setDirection(1);
    const ni = (lightbox.index + 1) % images.length;
    setLightbox({ src: images[ni], index: ni });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;
      if (e.key === 'ArrowLeft')  prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, images]);

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden pt-10 pb-32">

      {/* Header */}
      <h1
        style={{ fontFamily: "'Syne', sans-serif" }}
        className="text-3xl md:text-4xl font-bold text-white mb-3 text-center tracking-widest pt-2"
      >
        GALLERY
      </h1>
      <div className="w-12 h-px bg-white/20 mx-auto mb-4" />
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-center text-white/40 text-base mb-10 font-light"
      >
        Scroll down to spin · click to view
      </p>

      {/* Year Tabs */}
      <div className="flex justify-center gap-3 mb-10">
        {Object.keys(galleryData).map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border
              ${selectedYear === year
                ? "bg-white/10 text-white border-white/30 scale-105"
                : "bg-transparent text-white/40 border-white/10 hover:bg-white/5 hover:text-white/70"
              }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {images.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-white/30 text-lg"
              >
                No photos yet for {selectedYear}. Check back soon.
              </p>
            </div>
          ) : (
            <RingCarousel images={images} onImageClick={openLightbox} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            
            <div
              className="relative w-full max-w-5xl px-16"
              style={{ overflow: 'visible' }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightbox.index}
                  initial={{ opacity: 0, x: direction * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -80 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  src={lightbox.src}
                  alt="Selected"
                  className="w-full max-h-[80vh] object-contain rounded-2xl"
                />
              </AnimatePresence>

              {/* Counter */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <span
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-xs text-white/50 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
                >
                  {lightbox.index + 1} / {images.length}
                </span>
              </div>

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Prev */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;