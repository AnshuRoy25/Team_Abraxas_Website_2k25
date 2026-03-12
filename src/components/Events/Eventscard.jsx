import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Events.css';
import { ArrowLeft } from 'lucide-react';

const EventsCard = () => {
  const [activeTab, setActiveTab] = useState('2026');

  const eventCards = {
    '2026': [
      {
        id: 'event1',
        title: "Game Theory Workshop",
        image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773336326/9dc56427-9177-4c77-8330-8c6e91ad2941.png",
        description: "Freshmen interview date is 17-18 Jan"
      },
      {
        id: 'event2',
        title: "Innovision 2026",
        image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773336232/942481d9-c115-4169-8d9e-0a3a421eb00e.png",
        description: "Freshmen interview date is 17-18 Jan"
      },
      {
        id: 'event3',
        title: "Innovision 2026",
        image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773336901/15307876-f897-4ecd-a40a-e885d491796a.png",
        description: "Freshmen interview date is 17-18 Jan"
      }
    ],
    'previous': [
  {
    id: 'event1',
    title: "Investor Awareness Program",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773337011/16fa5518-a879-4f0e-b0dc-321494d8e91b.png",
    description: "Webinar featuring Mr. Harssh Laath, Senior Investment Strategist from AssetPlus, held on April 2nd"
  },
  {
    id: 'event2',
    title: "Legacy of Indigenous Science",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773337078/afd758f9-c646-464b-b190-e15a41fb061e.png",
    description: "Guest lecture by Dr. R.C. Verma, Former Professor from Panjab University, Chandigarh on March 24th"
  },
  {
    id: 'event3',
    title: "Physics Carnival - Abraxas Turns Two",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773337125/d9f40452-5ffd-414b-8d33-5f03a148dd81.png",
    description: "Exciting physics demonstrations and fun games celebrating Team Abraxas' 2nd anniversary on March 22nd, 2025"
  },
  {
    id: 'event4',
    title: "Inside AI: What ChatGPT, Perplexity and DeepSeek Won't Tell You",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773337145/7cb2106c-2ca5-41d9-8739-6424725716d4.png",
    description: "Deep dive into AI technologies and their hidden aspects, held on March 18th, 2025"
  },
  {
    id: 'event5',
    title: "National Science Day Celebration",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773337165/3eec3dd7-e50d-4bc0-983c-52d98f871f33.png",
    description: "Quiz and debate competition in collaboration with Physteo, Department of Physics and Photonics Science on March 10th"
  },
  {
    id: 'event6',
    title: "Escape Room Challenge",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773337200/d0c4a0cd-765c-4f5b-8212-f1154267a9ee.png",
    description: "Physics-themed escape room with cash prizes up to ₹5000, held on April 10-11th"
  },
  {
    id: 'event7',
    title: "Cyber Clash",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773337255/b313e1d6-3d23-4cd9-9add-0ae089bbe846.png",
    description: "Competitive robotics battle event held on April 10-11th"
  },
  {
    id: 'event8',
    title: "Abraxas Innovation Showcase",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773337271/f247eddb-97e6-41c4-b02b-3bb1463b3d71.png",
    description: "Exhibition featuring Quantum Random Number Generator, Optical Telescope, Radio Telescope, Cluster Suspension, and Ionic Thruster on February 15th"
  },
  {
    id: 'event9',
    title: "Telescope Workshop",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341720/40ea7b01-8ac8-45d1-8f0c-a2ef6a0852a0.png",
    description: "Workshop on telescope usage and celestial observation. Certificates provided to all participants. Held on 14th March at 5:00 PM in Lecture Hall."
  },
  {
    id: 'event10',
    title: "Locked In Time",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341831/54f598c8-3102-4e6a-8cd9-8369f782196a.png",
    description: "Be a detective and solve the mystery! Cash prize worth Rs. 5000. Held at SAC on 15th April at 11 AM."
  },
  {
    id: 'event11',
    title: "Escape Room Party",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341564/0305989c-21f3-4de7-b783-905e3c4a8c63.png",
    description: "Physics-themed escape room challenge with cash prizes worth 3500 INR. Held on 11th April at 6:00 PM onwards at Ground (NIT-H)."
  },
  {
    id: 'event12',
    title: "Quantum Workshop",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341665/d1b1cb44-746c-4985-8677-120eea8237bd.png",
    description: "Comprehensive quantum computing workshop held at Lecture Hall on 4th February at 4 PM."
  },
  {
    id: 'event13',
    title: "Photon Quest",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341770/d4c1cbf5-9021-43c5-88b8-a049b272b512.png",
    description: "Physics-based quest competition with prize worth Rs. 3000. Held at SAC on 16th April at 11 AM."
  },
  {
    id: 'event14',
    title: "Physics Carnival - Abraxas Turns One",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341595/de942d35-59d0-4ff2-8f5c-73f929beba7e.png",
    description: "Celebrating Abraxas' first anniversary with open access to telescope, mini projects, and games. Held on 22nd March at 4 PM onwards at Student Park (SP)."
  },
  {
    id: 'event15',
    title: "National Science Day Celebration",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341896/e6a3cf38-77aa-47a1-a733-e3c31624c6e8.png",
    description: "Celebrating National Science Day honoring Dr. C.V. Raman and the Raman Effect. Exploring wonders and innovation together for a brighter future."
  },
  {
    id: 'event16',
    title: "Guest Lecture by Rajan Chopra",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341487/ebbb3005-f952-4884-af56-be122d0d8e83.png",
    description: "Guest lecture by Rajan Chopra - Social Media Influencer, Physics Educator, and Career Counsellor. Held on 4th April at 2 PM onwards at Mini Audi, New LH."
  },
  {
    id: 'event17',
    title: "Resume Building Workshop",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341427/fa4cdaa7-91c5-48b0-9470-52651d79e684.png",
    description: "Workshop on Resume Building in collaboration with Physteo. Held on 28th December 2024 at 9:30 PM onwards."
  },
  {
    id: 'event18',
    title: "PrintHub - 3D Printing Workshop",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341774/4fa92075-1ffb-49cb-bb0f-b01f84b77191.png",
    description: "Where innovation meets fabrication. 3D Printing workshop with special surprises. Bring your laptops & mouse. Held on 13th February at 5:00 PM onwards at Lecture Hall."
  },
  {
    id: 'event19',
    title: "Physics Mania",
    image: "https://res.cloudinary.com/dl9ey6o4d/image/upload/v1773341447/14e156b5-8b48-4e42-af18-230a0fce367c.png",
    description: "Physics games including Mirror Madness, Imprints of Inertia, Laser Cyclone, and Periodic Pathway. Cash prizes worth 2500 INR and much more! Held on 14th April at 5:00 PM onwards at Ground (NIT-H)."
  }
]
  };

  const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative md:w-[360px] md:h-[470px] w-[300px] h-[400px] mx-auto cursor-pointer"
      style={{ perspective: '1500px' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.8, 
          type: "spring", 
          stiffness: 100,
          damping: 15
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))'
          }}
        >
          <motion.img 
            src={card.image} 
            alt={card.title} 
            className="absolute w-full h-full object-contain"
            animate={{ scale: isFlipped ? 1.1 : 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Back */}
        <div 
          className="absolute w-full h-full rounded-2xl p-6 bg-black/95 border border-white/10"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <motion.div 
            className="text-white h-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ delay: isFlipped ? 0.3 : 0, duration: 0.3 }}
          >
            <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-xl font-bold mb-3 tracking-tight">{card.title}</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-sm leading-relaxed flex-grow overflow-y-auto text-white/70 mb-4">{card.description}</p>
            
            {/* Tap to close hint */}
            <div className="flex justify-center">
              <span className="text-white/50 text-xs bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                Tap anywhere to close
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

  const currentEvents = eventCards[activeTab];
  const shouldCenter = currentEvents.length === 1;

  return (
    <div className="bg-black relative px-6" style={{ overflow: 'visible' }}>
      <div className="relative z-10 max-w-7xl mx-auto" style={{ overflow: 'visible' }}>
        
        {/* Tab Buttons with more bottom margin */}
        <div className="flex justify-center gap-4 mb-20 pt-8">
          <button
            onClick={() => setActiveTab('2026')}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 border
              ${activeTab === '2026'
                ? 'bg-white/10 text-white border-white/30'
                : 'bg-transparent text-white/40 border-white/10 hover:bg-white/5 hover:text-white/70'}`}
          >
            2026
          </button>
          <button
            onClick={() => setActiveTab('previous')}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 border
              ${activeTab === 'previous'
                ? 'bg-white/10 text-white border-white/30'
                : 'bg-transparent text-white/40 border-white/10 hover:bg-white/5 hover:text-white/70'}`}
          >
            Previous Years
          </button>
        </div>

        {/* Cards Container with padding */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="py-8"
            style={{ overflow: 'visible' }}
          >
            <div
              className="overflow-x-scroll pb-8"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none'
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                const ele = e.currentTarget;
                const startX = e.pageX - ele.offsetLeft;
                const scrollLeft = ele.scrollLeft;
                
                const handleMouseMove = (e) => {
                  const x = e.pageX - ele.offsetLeft;
                  const walk = (x - startX) * 2;
                  ele.scrollLeft = scrollLeft - walk;
                };
                
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              <div
                className="flex gap-8"
                style={{
                  width: shouldCenter ? '100%' : `${currentEvents.length * 380}px`,
                  minWidth: '100%',
                  justifyContent: shouldCenter ? 'center' : 'flex-start',
                  paddingTop: '20px',
                  paddingBottom: '20px'
                }}
              >
                {currentEvents.map(card => (
                  <Card key={card.id} card={card} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .overflow-x-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default EventsCard;