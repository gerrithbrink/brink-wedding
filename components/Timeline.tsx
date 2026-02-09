import React, { useEffect, useRef, useState } from 'react';

interface TimelineEvent {
  date: string;
  images: string[];
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    date: "December 18, 2022",
    images: ["/timelineImages/20221218_211721307_iOS.jpg"],
    title: "The Beginning",
    description: "Where our story started."
  },
  {
    date: "May 16, 2023",
    images: ["/timelineImages/20230516_132504000_iOS.jpg"],
    title: "Making Memories",
    description: "Early adventures together."
  },
  {
    date: "August 6, 2023",
    images: ["/timelineImages/20230806_071954000_iOS.jpg"],
    title: "Summer Days",
    description: "Soaking up the sun."
  },
  {
    date: "October 1, 2023",
    images: [
      "/timelineImages/20231001_050312000_iOS.jpg",
      "/timelineImages/20231001_074559.jpg",
      "/timelineImages/20231001_074900000_iOS.jpg"
    ],
    title: "Fall Adventures",
    description: "Exploring new places."
  },
  {
    date: "December 15, 2023",
    images: [
      "/timelineImages/20231215_132353(0).jpg",
      "/timelineImages/20231215_104542.jpg",
      "/timelineImages/20231215_134004.jpg"
    ],
    title: "Holiday Season",
    description: "Celebrating our first year."
  },
  {
    date: "February 10, 2024",
    images: ["/timelineImages/20240210_175558.jpg"],
    title: "Growing Together",
    description: "Every day brings something new."
  },
  {
    date: "June 17, 2024",
    images: ["/timelineImages/20240617_094120.jpg"],
    title: "Summer 2024",
    description: "Another beautiful summer."
  },
  {
    date: "September 22, 2024",
    images: ["/timelineImages/20240922_121236.jpg"],
    title: "Autumn Breeze",
    description: "Moments we'll cherish forever."
  },
  {
    date: "December 20, 2024",
    images: [
      "/timelineImages/20241220_135410.jpg",
      "/timelineImages/20241220_155832.jpg"
    ],
    title: "Festive Spirits",
    description: "Joy and laughter."
  },
  {
    date: "December 29, 2025",
    images: [
      "/timelineImages/20251229_112616.jpg",
      "/timelineImages/20251229_112625.jpg",
      "/timelineImages/20251229_112744.jpg",
      "/timelineImages/20251229_154956.jpg",
      "/timelineImages/20251229_181745000_iOS.jpg"
    ],
    title: "Holiday Getaway",
    description: "Making memories with family and friends."
  },
  {
    date: "January 31, 2026",
    images: ["/timelineImages/20260131_155111362_iOS.jpg"],
    title: "She Said Yes!",
    description: "The beginning of our forever."
  }
];

export const Timeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems(prev => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-sage-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-sage-900 mb-20 tracking-wide">Our Journey</h2>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-sage-300" />

          <div className="space-y-24">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleItems[index];

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                    }`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-rustic-cream border-2 border-sage-500 z-10 hidden md:block" />

                  {/* Connector Line (Desktop) */}
                  <div className={`hidden md:block absolute top-1/2 h-px bg-sage-300 w-8 ${isEven
                      ? 'left-1/2 -translate-x-full ml-[calc(-50%+2rem)] origin-right' // This logic is tricky, let's simplify
                      : 'left-1/2'
                    }`} style={{
                      width: '32px',
                      left: isEven ? 'auto' : '50%',
                      right: isEven ? '50%' : 'auto',
                    }} />


                  {/* Left Side (Content or Images depending on even/odd) */}
                  <div className={`md:text-right ${isEven ? 'md:order-1' : 'md:order-2 md:pl-8'}`}>
                    {isEven ? (
                      <EventContent event={event} align="right" />
                    ) : (
                      <ImageGrid images={event.images} />
                    )}
                  </div>

                  {/* Mobile Dot/Line connection hack for mobile only */}
                  <div className="absolute left-4 top-8 w-3 h-3 rounded-full bg-sage-500 border border-white z-10 md:hidden" />

                  {/* Right Side */}
                  <div className={`pl-12 md:pl-0 ${isEven ? 'md:order-2 md:pl-8' : 'md:order-1 md:text-right md:pr-8'}`}>
                    {isEven ? (
                      <ImageGrid images={event.images} />
                    ) : (
                      <EventContent event={event} align="left" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-32">
            <div className="inline-block p-4 border border-sage-200 rounded-full bg-white shadow-sm">
              <p className="text-sage-600 italic font-serif text-xl px-6">And so the adventure continues...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventContent: React.FC<{ event: TimelineEvent; align: 'left' | 'right' }> = ({ event, align }) => (
  <div className={`flex flex-col ${align === 'right' ? 'md:items-end' : 'md:items-start'}`}>
    <span className="inline-block px-4 py-1.5 bg-white border border-sage-100 text-sage-800 text-sm tracking-widest uppercase rounded-full mb-4 shadow-sm">
      {event.date}
    </span>
    <h3 className="text-3xl font-serif text-sage-900 mb-3">{event.title}</h3>
    <p className="text-sage-700 leading-relaxed font-light max-w-md">{event.description}</p>
  </div>
);

const ImageGrid: React.FC<{ images: string[] }> = ({ images }) => {
  if (images.length === 1) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-md group hover:shadow-xl transition-shadow duration-500">
        <img
          src={images[0]}
          alt="Memory"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className={`relative aspect-[3/4] overflow-hidden rounded-sm shadow-md group hover:shadow-xl transition-shadow duration-500 ${idx === 1 ? 'mt-8' : 'mb-8'}`}>
            <img
              src={img}
              alt={`Memory ${idx}`}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    );
  }

  // 3 or more images
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 relative aspect-[16/9] overflow-hidden rounded-sm shadow-md group hover:shadow-xl transition-shadow duration-500">
        <img
          src={images[0]}
          alt="Main Memory"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
      </div>
      {images.slice(1, 3).map((img, idx) => (
        <div key={idx} className="relative aspect-square overflow-hidden rounded-sm shadow-md group hover:shadow-xl transition-shadow duration-500">
          <img
            src={img}
            alt={`Memory ${idx + 1}`}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      ))}
      {images.length > 3 && (
        <div className="col-span-2 text-right">
          <span className="text-xs text-sage-500 uppercase tracking-widest">+ {images.length - 3} more moments</span>
        </div>
      )}
    </div>
  );
};
