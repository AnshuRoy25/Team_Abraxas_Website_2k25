import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const galleryData = {
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
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.35_qlocpd.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.34_2_bdccj0.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082716/WhatsApp_Image_2025-03-27_at_19.04.34_1_xdtmbb.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082717/WhatsApp_Image_2025-03-27_at_19.04.34_z8lk1v.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.33_2_okvkys.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082718/WhatsApp_Image_2025-03-27_at_19.04.33_3_md4hsf.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1743082719/WhatsApp_Image_2025-03-27_at_19.04.33_1_py7ikr.jpg",
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
        "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712790962/ABRAXAS-Gallery24/pude5plcom6q0xbtq2dy.jpg",
        "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712793846/ABRAXAS-Gallery24/tfo3lskopqcx1uccmv6m.jpg",
        "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712791247/ABRAXAS-Gallery24/yivjfkaqdkt4sxxb9vo4.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20240818-184421_fdkyb6.png",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20250131-015712_Photos_aq4hzd.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20250131-015648_Photos_foxja7.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20250131-015738_Photos_ub228u.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269370/Screenshot_20250131-015833_Photos_idujq9.jpg",
        "https://res.cloudinary.com/dlw2rmxyi/image/upload/v1738269369/Screenshot_20250131-015755_Photos_yzjgje.jpg",
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
        "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786196/ABRAXAS-Gallery/beojwnkbswr2bp0yqge6.jpg",
        "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786183/ABRAXAS-Gallery/j67owgbkvtsjerbotvob.jpg",
        "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786228/ABRAXAS-Gallery/tfopj6kz3nyxfhx2s1ae.jpg",
        "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786260/ABRAXAS-Gallery/ziuw6xbziugszlap3dvf.jpg",
        "https://res.cloudinary.com/dyq1mioyr/image/upload/v1712786178/ABRAXAS-Gallery/a7txsa3jgy3ibf0hq6gh.jpg",
    ],
    "2026": [],
};

const PhotoCard = ({ src, index, total, onClick }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.35), ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative flex-shrink-0 cursor-pointer"
            style={{ width: '260px', height: '320px' }}
            onClick={() => onClick(index)}
        >
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/[0.08] relative"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
                <img
                    src={src}
                    alt={`Photo ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent
                    translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-xs text-white/70 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                        {index + 1} / {total}
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4
                    translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                    transition-all duration-300 delay-75">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Camera className="w-4 h-4 text-white/80" />
                            <span style={{ fontFamily: "'DM Sans', sans-serif" }}
                                className="text-sm text-white font-medium">View Photo</span>
                        </div>
                        <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center bg-white/5">
                            <span className="text-white text-xs">↗</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 30px rgba(255,255,255,0.06)' }} />
        </motion.div>
    );
};

const GallerySection = () => {
    const [selectedYear, setSelectedYear] = useState('2025');
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const scrollRef = useRef(null);

    const images = galleryData[selectedYear] || [];

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const prevImage = (e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + images.length) % images.length); };
    const nextImage = (e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % images.length); };

    useEffect(() => {
        const handler = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + images.length) % images.length);
            if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % images.length);
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [lightboxIndex, images.length]);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    }, [selectedYear]);

    const handleScrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    };
    const handleScrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    };

    // Mouse drag to scroll
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const dragScrollLeft = useRef(0);

    const onMouseDown = (e) => {
        isDragging.current = true;
        dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
        dragScrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing';
    };
    const onMouseLeave = () => { isDragging.current = false; if (scrollRef.current) scrollRef.current.style.cursor = 'grab'; };
    const onMouseUp = () => { isDragging.current = false; if (scrollRef.current) scrollRef.current.style.cursor = 'grab'; };
    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - dragStartX.current) * 1.5;
        scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
    };

    return (
        <div className="bg-black py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header — fixed with whileInView */}
                <motion.h2
                    style={{ fontFamily: "'Syne', sans-serif" }}
                    className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 text-center tracking-tight"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    Gallery
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
                    Moments from our journey
                </motion.p>

                {/* Year Tabs */}
                <motion.div
                    className="flex justify-center gap-3 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                >
                    {Object.keys(galleryData).map((year) => (
                        <button key={year} onClick={() => setSelectedYear(year)}
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border
                                ${selectedYear === year
                                    ? 'bg-white/10 text-white border-white/30 scale-105'
                                    : 'bg-transparent text-white/40 border-white/10 hover:bg-white/5 hover:text-white/70'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </motion.div>

                {/* Scroll strip */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedYear}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3 }}
                    >
                        {images.length === 0 ? (
                            <div className="flex items-center justify-center h-64">
                                <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white/30 text-lg">
                                    No photos yet for {selectedYear}. Check back soon.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div
                                    ref={scrollRef}
                                    className="flex gap-4 pb-4"
                                    style={{
                                        overflowX: 'scroll',
                                        overflowY: 'visible',
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none',
                                        WebkitOverflowScrolling: 'touch',
                                        cursor: 'grab',
                                    }}
                                    onMouseDown={onMouseDown}
                                    onMouseLeave={onMouseLeave}
                                    onMouseUp={onMouseUp}
                                    onMouseMove={onMouseMove}
                                >
                                    {images.map((src, i) => (
                                        <PhotoCard
                                            key={src}
                                            src={src}
                                            index={i}
                                            total={images.length}
                                            onClick={openLightbox}
                                        />
                                    ))}
                                </div>

                                {/* Scroll buttons */}
                                <div className="flex justify-end gap-3 mt-4">
                                    <button
                                        onClick={handleScrollLeft}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10
                                            flex items-center justify-center text-white/50
                                            hover:bg-white/10 hover:text-white hover:border-white/30
                                            transition-all duration-200"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={handleScrollRight}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10
                                            flex items-center justify-center text-white/50
                                            hover:bg-white/10 hover:text-white hover:border-white/30
                                            transition-all duration-200"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
                        onClick={closeLightbox}
                    >
                     
                        <div
                        className="relative"
                        style={{ maxWidth: '560px', width: '100%', overflow: 'visible' }}
                        onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                key={lightboxIndex}
                                initial={{ scale: 0.88, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.88, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                                src={images[lightboxIndex]}
                                alt="Selected"
                                className="w-full rounded-2xl border border-white/10"
                                style={{ maxHeight: '70vh', objectFit: 'contain' }}
                            />
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                                <span style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    className="text-xs text-white/50 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                    {lightboxIndex + 1} / {images.length}
                                </span>
                            </div>
                            <button onClick={closeLightbox}
                                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-200">
                                <X className="w-4 h-4 text-white" />
                            </button>
                            <button onClick={prevImage}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-200">
                                <ChevronLeft className="w-4 h-4 text-white" />
                            </button>
                            <button onClick={nextImage}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-200">
                                <ChevronRight className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GallerySection;