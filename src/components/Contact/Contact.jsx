import React from 'react';
import { useInView } from 'react-intersection-observer';

const TimelineEvent = ({ date, events }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="relative w-full md:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-12 pl-8">
      <div className={`transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div style={{ fontFamily: "'Syne', sans-serif" }} className="text-base font-bold mb-14 text-white tracking-wide">
          {date}
        </div>

        <div className="absolute left-4 w-px bg-transparent top-0 mt-10 overflow-hidden h-full">
          <div className={`w-px bg-white/20 h-full transform origin-top transition-transform duration-1000 ${inView ? 'scale-y-100' : 'scale-y-0'}`} />
          <div className={`w-3 h-3 rounded-full bg-white absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <div className="absolute w-full h-full rounded-full bg-white animate-ping opacity-40" />
          </div>
          <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-moveDown">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-white/30 opacity-0 animate-colorChange" />
            </div>
          </div>
          <div className={`w-3 h-3 rounded-full bg-white/60 absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-1000 ${inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <div className="absolute w-full h-full rounded-full bg-white/40 animate-pulse" />
          </div>
        </div>

        <div className="space-y-4 relative">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative p-4 rounded-lg transform transition-all duration-1000 group overflow-hidden border border-white/5
                ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{
                transitionDelay: `${index * 200}ms`,
                background: 'rgba(255,255,255,0.03)'
              }}
            >
              <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <div className="relative z-10">
                <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="font-medium text-white/80 mb-1 text-sm">
                  {event.date}: {event.title}
                </div>
                {event.subtitle && (
                  <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-xs text-white/30">{event.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    { month: 'October 2025', events: [{ date: '3', title: 'Sophomore Interviews' }] },
    { month: 'January 2026', events: [{ date: '16', title: 'Nimbus Orientation', subtitle: 'Introducing Abraxas to Freshmen' }, { date: '17 & 18', title: 'Freshmen Interviews' }] },
    { month: 'February 2026', events: [{ date: '15', title: 'Innovision' }] },
    { month: 'March 2026', events: [{ date: '11', title: 'Game Theory Workshop' }] },
    { month: 'April 2026', events: [{ date: '', title: 'To be Announced', subtitle: '' }] }
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <style jsx global>{`
        @keyframes moveDown {
          0% { transform: translate(-50%, 0); }
          100% { transform: translate(-50%, 100%); }
        }
        @keyframes colorChange {
          0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; }
        }
        .animate-moveDown { animation: moveDown 2s ease-in-out infinite; }
        .animate-colorChange { animation: colorChange 2s ease-in-out infinite; }
        @media (max-width: 1024px) {
          .timeline-container {
            height: calc(100vh - 8rem);
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: rgba(255,255,255,0.2) transparent;
          }
        }
      `}</style>

      <h1 style={{ fontFamily: "'Syne', sans-serif" }} className="text-3xl md:text-4xl font-bold text-white mb-3 text-center tracking-widest">
        TIMELINE
      </h1>
      <div className="w-12 h-px bg-white/20 mx-auto mb-12"></div>

      <div className="timeline-container">
        <div className="flex flex-col md:flex-row flex-wrap justify-center max-w-7xl mx-auto">
          {timelineData.map((month, index) => (
            <TimelineEvent key={index} date={month.month} events={month.events} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;