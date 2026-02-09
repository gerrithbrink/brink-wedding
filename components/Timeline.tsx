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
    images: [
      "/timelineImages/1_FirstDance_20221218_211721307_iOS.jpg",
      "/timelineImages/2_EveryNationSokkie_20221218_212107203_iOS.jpg"
    ],
    title: "The Beginning",
    description: "From our very first dance to dancing the night away, it was clear that this was the start of something special."
  },
  {
    date: "May 16, 2023",
    images: ["/timelineImages/3_HuisFonsDance_20230516_132504000_iOS.jpg"],
    title: "Dancing Through Life",
    description: "Another dance, another memory. Swept off our feet and loving every step together."
  },
  {
    date: "May 20, 2023",
    images: [
      "/timelineImages/4_BoggomsBayBreakfast_20230520_115421.jpg",
      "/timelineImages/5_BoggomsBayBreakfast_20230521_135245000_iOS.jpg"
    ],
    title: "Boggoms Bay Escape",
    description: "A quiet getaway to Boggoms Bay. Breakfast with a view and the best company we could ask for."
  },
  {
    date: "June 11, 2023",
    images: ["/timelineImages/6_WellingtonWeekend_20230611_203444000_iOS.jpg"],
    title: "Wellington Weekend",
    description: "Exploring Wellington and soaking in the winter sun. Simple weekends are often the best ones."
  },
  {
    date: "July 17, 2023",
    images: [
      "/timelineImages/7_NatureVallySundowners_20230717_151327719_iOS.jpg",
      "/timelineImages/8_NaturesValleyGully_20230718_095141.jpg"
    ],
    title: "Nature's Valley",
    description: "Chasing sunsets and exploring gullies in Nature's Valley. The world is more beautiful when we see it together."
  },
  {
    date: "August 6, 2023",
    images: [
      "/timelineImages/9_Sara21steBirthdayDate_20230806_071954000_iOS.jpg",
      "/timelineImages/10_SaraHuisDance_20230812_091958000_iOS.jpg"
    ],
    title: "Celebrations",
    description: "Celebrating Sara's 21st and twirling through another house dance. Life is a party with you."
  },
  {
    date: "September 15, 2023",
    images: ["/timelineImages/11_CangoCaves_20230915_124921.jpg"],
    title: "Cango Caves Adventure",
    description: "Going underground! Exploring the wonders of the Cango Caves."
  },
  {
    date: "September 30, 2023",
    images: [
      "/timelineImages/12_CederbergArchHike_20230930_182254.jpg",
      "/timelineImages/13_CederbergArchHike_20231001_074559.jpg",
      "/timelineImages/14_CederbergArchHike_20231001_050312000_iOS.jpg",
      "/timelineImages/15_CederbergArchHike_20231001_074900000_iOS.jpg"
    ],
    title: "Cederberg Arch Hike",
    description: "Conquering the Cederberg Arch. Steep climbs, breathtaking views, and unforgettable trails."
  },
  {
    date: "October 3, 2023",
    images: [
      "/timelineImages/16_QuizNightAtThirstyScareCrow_20231003_211917.jpg",
      "/timelineImages/17_CapeTownLife_20231022_184411.jpg"
    ],
    title: "Cape Town Life",
    description: "Quiz nights and city lights. Enjoying the vibrant life of Cape Town together."
  },
  {
    date: "October 22, 2023",
    images: [
      "/timelineImages/18_SpringbokSupporters_20231022_071331000_iOS.jpg",
      "/timelineImages/19_SpringbokSupporters_20231028_194821.jpg"
    ],
    title: "Bokke!",
    description: "Backing the Boys! Cheering for the Springboks and sharing the victory spirit."
  },
  {
    date: "November 16, 2023",
    images: ["/timelineImages/20_UniversityOffice_20231116_165357.jpg"],
    title: "Campus Moments",
    description: "Even quiet moments in the university office are better together."
  },
  {
    date: "December 9, 2023",
    images: ["/timelineImages/21_BowlingWithInLaws_20231209_192126.jpg"],
    title: "Bowling Fun",
    description: "Striking out (in a good way!) during a fun night of bowling with the family."
  },
  {
    date: "December 15, 2023",
    images: [
      "/timelineImages/22_StrandLooperHike_20231215_104542.jpg",
      "/timelineImages/23_StrandLooperHike2Bags_20231215_132353(0).jpg",
      "/timelineImages/24_StrandLooperHike_20231215_134004.jpg"
    ],
    title: "Strandloper Hike",
    description: "Walking the coast on the Strandloper Trail. Sea breeze, sandy paths, and endless horizons."
  },
  {
    date: "December 31, 2023",
    images: ["/timelineImages/25_NewYearsEve2023_20231231_230200.jpg"],
    title: "Ringing in the New Year",
    description: "Welcoming 2024 with hope, joy, and a midnight kiss."
  },
  {
    date: "February 10, 2024",
    images: ["/timelineImages/26_LiefdeByDieDam_20240210_175558.jpg"],
    title: "Liefde By Die Dam",
    description: "Music, summer vibes, and love at Liefde By Die Dam."
  },
  {
    date: "March 27, 2024",
    images: [
      "/timelineImages/27_MammaMia_20240327_224824.jpg",
      "/timelineImages/28_GerritGraduation_20240328_141249000_iOS.jpg"
    ],
    title: "Milestones",
    description: "From the theatrical magic of Mamma Mia to the proud moment of Gerrit's graduation."
  },
  {
    date: "May 26, 2024",
    images: ["/timelineImages/29_Bos400Hike_20240526_081331000_iOS.jpg"],
    title: "Bos 400 Shipwreck Hike",
    description: "Hiking to the Bos 400 shipwreck. A rugged adventure along the coast."
  },
  {
    date: "June 15, 2024",
    images: [
      "/timelineImages/30_RobbieElzaanWedding_20240615_134224029_iOS.jpg",
      "/timelineImages/31_TrainBridgeToVicBay_20240617_094120.jpg"
    ],
    title: "Weddings & Road Trips",
    description: "Celebrating love at Robbie & Elzaan's wedding and exploring the road to Vic Bay."
  },
  {
    date: "July 19, 2024",
    images: [
      "/timelineImages/32_SaraItaly_20240719_183124976_iOS.jpg",
      "/timelineImages/33_SaraFinalEngineeringDance_20240802_190544000_iOS.jpg"
    ],
    title: "European Dreams & Dances",
    description: "Sara's Italian adventure and one last engineering dance to remember."
  },
  {
    date: "September 7, 2024",
    images: [
      "/timelineImages/34_IceCreamDate_20240907_220452.jpg",
      "/timelineImages/35_GunRunGerrit_20240915_070359505_iOS.jpg",
      "/timelineImages/36_MeetingRichter_20240922_121236.jpg",
      "/timelineImages/37_SailingWithGian_20240929_092354939_iOS.jpg"
    ],
    title: "Spring Adventures",
    description: "Ice cream dates, running the Gun Run, and sailing days. September was full of action!"
  },
  {
    date: "October 13, 2024",
    images: ["/timelineImages/38_LionsHeadHike_20241013_081716.jpg"],
    title: "Lion's Head Summit",
    description: "Sunrise or sunset, the view from Lion's Head is always worth the climb."
  },
  {
    date: "December 20, 2024",
    images: [
      "/timelineImages/39_AmatolaHike_20241220_135410.jpg",
      "/timelineImages/40_AmatolaHike_20241220_155832.jpg",
      "/timelineImages/41_AmatolaHike_20241222_135957.jpg",
      "/timelineImages/42_AmatolaHike_20241224_083602000_iOS.jpg",
      "/timelineImages/43_AmatolaHike_20241224_083603000_iOS.jpg"
    ],
    title: "Amatola Trail",
    description: "Braving the Amatola Trail. Days of hiking, lush forests, and testing our endurance together."
  },
  {
    date: "April 19, 2025",
    images: [
      "/timelineImages/44_OtterHike_20250419_073044.jpg",
      "/timelineImages/45_OtterHike_20250419_101222490_iOS.jpg",
      "/timelineImages/46_OtterHikeGerritBDay_20250419_133930264_iOS.jpg",
      "/timelineImages/47_OtterHike_20250421_091844.jpg"
    ],
    title: "The Otter Trail",
    description: "The iconic Otter Trail. Rugged coastlines, river crossings, and celebrating Gerrit's birthday on the trail."
  },
  {
    date: "May 4, 2025",
    images: [
      "/timelineImages/48_WianWedding_20250504_194521000_iOS.jpg",
      "/timelineImages/49_WianWedding_20250707_180133000_iOS.jpg"
    ],
    title: "Wedding Bells",
    description: "Suiting up for Wian's wedding celebrations. Always the best wedding date."
  },
  {
    date: "August 1, 2025",
    images: [
      "/timelineImages/50_Pottery_20250801_211310.jpg",
      "/timelineImages/51_Churchhaven_20250926_163221298_iOS.jpg",
      "/timelineImages/52_ChurchhavenSailing_20250927_144035000_iOS.jpg"
    ],
    title: "Creative & Coastal",
    description: "Getting creative with pottery and relaxing weekends in Churchhaven."
  },
  {
    date: "October 23, 2025",
    images: [
      "/timelineImages/53_JosephMusical_20251023_194753.jpg",
      "/timelineImages/54_GretheWedding_20251117_151735000_iOS.jpg"
    ],
    title: "Cultural Nights",
    description: "Enjoying the Joseph musical and celebrating Grethe's special day."
  },
  {
    date: "December 8, 2025",
    images: [
      "/timelineImages/55_1_SaraGraduation_IMG_2510.JPG",
      "/timelineImages/55_SaraGraduation_20251208_140524140_iOS.jpg"
    ],
    title: "Sara's Graduation",
    description: "She did it! So proud of Sara's graduation achievement."
  },
  {
    date: "December 16, 2025",
    images: [
      "/timelineImages/56_JJWedding_20251216_201418522_iOS.jpg",
      "/timelineImages/57_DrakensbergHike_20251218_075059000_iOS.jpg",
      "/timelineImages/58_DrakensbergHikeSaraFlowers_20251222_091911.jpg",
      "/timelineImages/59_DrakensbergHikeCave_20251222_104221.jpg"
    ],
    title: "Adventure & Celebration",
    description: "Wedding bells for JJ and a breathtaking trek through the Drakensberg mountains."
  },
  {
    date: "December 29, 2025",
    images: [
      "/timelineImages/60_EngagementForest_20251229_112616.jpg",
      "/timelineImages/61_EngagementForest_20251229_112625.jpg",
      "/timelineImages/62_EngagementForest_20251229_112744.jpg",
      "/timelineImages/63_EngagementPicnic_20251229_154956.jpg",
      "/timelineImages/64_EngagementBeachPhotoShoot_20251229_181745000_iOS.jpg",
      "/timelineImages/65_EngagementBeachPhotoShoot_IMG_2626.JPG",
      "/timelineImages/67_EngagementBeachPhotoShoot_IMG_2631.JPG",
      "/timelineImages/68_EngagementBeachPhotoShoot_IMG_2637.JPG",
      "/timelineImages/69_EngagementBeachPhotoShoot_IMG_2657.JPG",
      "/timelineImages/70_EngagementBeachPhotoShoot_IMG_2662.JPG",
      "/timelineImages/71_EngagementBeachPhotoShoot_IMG_2678.JPG",
      "/timelineImages/72_EngagementBeachPhotoShoot_IMG_2679.JPG",
      "/timelineImages/73_EngagementBeachPhotoShoot_IMG_2682.JPG",
      "/timelineImages/74_EngagementBeachPhotoShoot_IMG_2696.JPG",
      "/timelineImages/75_EngagementBeachPhotoShoot_IMG_2699.JPG",
      "/timelineImages/76_EngagementBeachPhotoShoot_IMG_2707.JPG",
      "/timelineImages/77_EngagementBeachPhotoShoot_IMG_2709.JPG",
      "/timelineImages/78_EngagementBeachPhotoShoot_IMG_2713.JPG"
    ],
    title: "The Proposal",
    description: "The easiest 'Yes'. A magical day in the forest, a picnic, and a sunset beach shoot to mark the beginning of our forever."
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const items = document.querySelectorAll('.timeline-card');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-rustic-cream overflow-hidden">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sage-400 tracking-[0.3em] uppercase text-xs mb-4 font-sans">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-serif text-sage-900 tracking-wide">Our Journey</h2>
          <div className="w-16 h-px bg-sage-300 mx-auto mt-6" />
        </div>

        <div className="space-y-8 md:space-y-12">
          {events.map((event, index) => {
            const isVisible = visibleItems[index];
            const isLast = index === events.length - 1;

            return (
              <div
                key={index}
                data-index={index}
                className={`timeline-card transition-all duration-700 ease-out ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${50}ms` }}
              >
                <TimelineCard event={event} isHighlight={isLast} />
              </div>
            );
          })}
        </div>

        <div
          className="text-center mt-16 md:mt-20 opacity-0 translate-y-8 transition-all duration-700"
          style={{ animation: 'fadeUp 0.8s ease-out 0.5s forwards' }}
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-px bg-sage-300" />
            <p className="text-sage-500 italic font-serif text-lg">And so the adventure continues...</p>
            <div className="w-12 h-px bg-sage-300" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

/* ─── Card Component ─── */
const TimelineCard: React.FC<{ event: TimelineEvent; isHighlight: boolean }> = ({ event, isHighlight }) => {
  const hasMultipleImages = event.images.length > 1;

  return (
    <div
      className={`
        rounded-2xl overflow-hidden
        ${isHighlight
          ? 'bg-sage-800 text-white shadow-xl ring-1 ring-sage-700'
          : 'bg-white shadow-md hover:shadow-lg ring-1 ring-sage-100'
        }
        transition-shadow duration-500
      `}
    >
      {/* Image section */}
      <div className="relative">
        <ImageDisplay images={event.images} isHighlight={isHighlight} />

        {/* Date badge overlaid on image */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`
              inline-block px-3 py-1.5 text-xs tracking-[0.15em] uppercase font-sans font-bold rounded-full backdrop-blur-md
              ${isHighlight
                ? 'bg-white/20 text-white'
                : 'bg-white/80 text-sage-800'
              }
            `}
          >
            {event.date}
          </span>
        </div>
      </div>

      {/* Text content – compact, overlapping feel */}
      <div className={`px-5 py-4 md:px-6 md:py-5 ${isHighlight ? '' : ''}`}>
        <h3
          className={`
            text-xl md:text-2xl font-serif mb-1
            ${isHighlight ? 'text-white' : 'text-sage-900'}
          `}
        >
          {event.title}
        </h3>
        <p
          className={`
            text-sm md:text-base leading-relaxed font-light
            ${isHighlight ? 'text-sage-200' : 'text-sage-600'}
          `}
        >
          {event.description}
        </p>
      </div>
    </div>
  );
};

/* ─── Arrow Button ─── */
const ArrowButton: React.FC<{
  direction: 'left' | 'right';
  onClick: () => void;
}> = ({ direction, onClick }) => (
  <button
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className={`
      absolute top-1/2 -translate-y-1/2 z-20
      ${direction === 'left' ? 'left-2 md:left-3' : 'right-2 md:right-3'}
      w-9 h-9 md:w-10 md:h-10
      flex items-center justify-center
      rounded-full
      bg-white/70 backdrop-blur-sm
      text-sage-800
      shadow-md
      opacity-0 group-hover:opacity-100
      hover:bg-white hover:scale-110
      active:scale-95
      transition-all duration-300 ease-out
      cursor-pointer
    `}
    aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 md:w-5 md:h-5"
    >
      {direction === 'left'
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 6 15 12 9 18" />
      }
    </svg>
  </button>
);

/* ─── Image Display ─── */
const ImageDisplay: React.FC<{ images: string[]; isHighlight: boolean }> = ({ images, isHighlight }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  // Single image – no arrows needed
  if (images.length === 1) {
    return (
      <div className={`relative w-full overflow-hidden flex items-center justify-center max-h-[60vh] ${isHighlight ? 'bg-sage-800' : 'bg-sage-50'}`}>
        <img
          src={images[0]}
          alt="Memory"
          className="w-full h-auto block max-h-[60vh] object-contain transform hover:scale-[1.03] transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isHighlight ? 'from-sage-800/30' : 'from-black/10'} to-transparent pointer-events-none`} />
      </div>
    );
  }

  // Multiple images – carousel with arrows and dot indicators
  return (
    <div className="group relative w-full overflow-hidden bg-sage-50 flex items-center justify-center max-h-[60vh]">
      {/* Current image */}
      <img
        src={images[activeIndex]}
        alt={`Memory ${activeIndex + 1}`}
        className="w-full h-auto block max-h-[60vh] object-contain transition-opacity duration-500"
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${isHighlight ? 'from-sage-800/30' : 'from-black/15'} to-transparent pointer-events-none`} />

      {/* Left / Right arrows */}
      <ArrowButton direction="left" onClick={goPrev} />
      <ArrowButton direction="right" onClick={goNext} />

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`
              rounded-full transition-all duration-300
              ${idx === activeIndex
                ? 'w-5 h-2 bg-white shadow-sm'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }
            `}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-sans tracking-wide">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
};
