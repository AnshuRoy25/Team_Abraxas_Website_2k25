import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Contact from './components/Contact/Contact';
import Starfield from './components/star/Starfield';
import Projects from './components/Project/Project';
import Timeline from './components/Timeline/Timeline';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Events from './components/Events/Events';
import IntroAnimation from './components/intro/IntroAnimation';
import GlobeGallery from './components/InfiniteMenu/GlobeGallery';

const Team = lazy(() => import('./components/team/Team'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen bg-black">
    <p
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="text-white/40 tracking-widest text-sm animate-pulse"
    >
      Loading...
    </p>
  </div>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [pathname, hash]);

  return null;
};

// ── Cinematic Banner Component ──
const CinematicBanner = ({ src, textSide = 'right', label, line1, line2, line3, gap = 'my-16' }) => (
  <section className={`relative z-10 w-full overflow-hidden bg-black ${gap}`}>
    <style>{`
      .banner-img-wrap { aspect-ratio: 1.8 / 1; }
      @media (min-width: 641px)  { .banner-img-wrap { aspect-ratio: 2.5 / 1; } }
      @media (min-width: 1024px) { .banner-img-wrap { aspect-ratio: 3 / 1; } }
      @media (max-width: 640px)  { .banner-text { font-size: 2rem !important; } }
    `}</style>

    <div className="banner-img-wrap relative w-full overflow-hidden">
      <img
        src={src}
        alt="Cinematic banner"
        className="w-full h-full object-cover object-center"
        style={{
          filter: 'grayscale(100%) brightness(0.65) contrast(1.1)',
          display: 'block',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.6) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center px-6
          ${textSide === 'left'
            ? 'sm:justify-start sm:pl-10 md:pl-16 lg:pl-24'
            : 'sm:justify-end sm:pr-10 md:pr-16 lg:pr-24'
          }`}
      >
        <div
          className={`text-center max-w-[85vw] sm:max-w-xs md:max-w-sm lg:max-w-md
            ${textSide === 'left' ? 'sm:text-left' : 'sm:text-right'}`}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(0.5rem, 2vw, 0.8rem)',
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.45)',
            }}
            className="uppercase mb-2"
          >
            {label}
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.1rem, 4vw, 3.5rem)',
              lineHeight: 1.25,
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 2px 20px rgba(0,0,0,0.95)',
            }}
            className="lowercase banner-text"
          >
            {line1 && <>{line1}<br /></>}
            {line2 && <>{line2}<br /></>}
            {line3 && (
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>{line3}</span>
            )}
          </p>
          <div
            className={`w-8 h-px bg-white/25 mt-3 mx-auto
              ${textSide === 'left' ? 'sm:mx-0' : 'sm:ml-auto sm:mr-0'}`}
          />
        </div>
      </div>
    </div>
  </section>
);

// ── Events Banner Card Component ──
const EventsBannerCard = () => (
  <div className="flex justify-center px-4 sm:px-8 lg:px-16 mt-4 mb-8 sm:my-16">
    <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
      <div
        className="rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 w-full sm:w-[55%] mb-8 sm:mb-0"
        style={{ aspectRatio: '16 / 9', boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}
      >
        <img
          src="/ab1.jpg"
          alt="Events banner"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'grayscale(100%) contrast(1.05)',
            display: 'block',
            transition: 'filter 0.6s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
          onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%) contrast(1.05)'}
        />
      </div>
      <div className="flex flex-col justify-center text-left flex-1 w-full">
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(0.5rem, 1.5vw, 0.75rem)',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.35)',
          }}
          className="uppercase mb-3"
        >
          Team Abraxas
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 3.5vw, 3rem)',
            lineHeight: 1.2,
            color: 'rgba(255,255,255,0.95)',
          }}
          className="lowercase mb-4"
        >
          where ideas<br />
          become<br />
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>experiments.</span>
        </p>
        <div className="w-8 h-px bg-white/20 mb-4" />
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1.1rem, 1.5vw, 0.95rem)',
            color: 'rgba(255,255,255,0.35)',
            lineHeight: 1.7,
          }}
          className="font-light"
        >
          From workshops to competitions,<br />
          every event is a chance to push<br />
          the boundaries of what's possible.
        </p>
      </div>
    </div>
  </div>
);

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <div style={{ width: '100vw' }}>
          <Router>
            <ScrollToTop />
            <section id="Navbar">
              <Navbar />
            </section>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Starfield
                      starCount={window.innerWidth < 768 ? 1000 : 2500}
                      starColor={[255, 255, 255]}
                      speedFactor={0.15}
                      backgroundColor="black"
                    />
                    <Hero />

                    <CinematicBanner
                      src="abraxas-2.jpeg"
                      textSide="left"
                      label="Team Abraxas"
                      line1="built by curious"
                      line2="minds, driven by"
                      line3="physics."
                    />

                    <section id="About" className="relative z-10 bg-black">
                      <About />
                    </section>

                    <CinematicBanner
                      src="/abraxas-3.jpeg"
                      textSide="right"
                      label="Team Abraxas"
                      line1="we don't just"
                      line2="study the universe."
                      line3="we question it."
                    />

                    <section id="Projects">
                      <Projects />
                    </section>

                    {/* GlobeGallery — has Explore More button inside, routes to /Gallery */}
                    <section id="GlobeGallery">
                      <GlobeGallery />
                    </section>

                    <EventsBannerCard />

                    <section id="Events" className="mt-32 sm:mt-0">
                      <Events />
                    </section>

                    <section id="Timeline" className="mt-16 sm:mt-24">
                      <Timeline />
                    </section>

                    <section id="Contact">
                      <Contact />
                    </section>

                    <section id="Footer">
                      <Footer />
                    </section>
                  </>
                } />
                <Route path="/Team" element={<Team />} />
                {/* /Gallery is now a dedicated full page with GallerySection inside Gallery.jsx */}
                <Route path="/Gallery" element={<Gallery />} />
              </Routes>
            </Suspense>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;