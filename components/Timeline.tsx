import React, { useEffect, useState } from 'react';

interface TimelineEvent {
  category: string;
  images: string[];
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    category: "First Dances",
    images: [
      "/timelineImages/1_First_Dances_2022-2023/1_FirstDance_20220818_211721307_iOS.jpg",
      "/timelineImages/1_First_Dances_2022-2023/2_EveryNationSokkie_20221001_212107203_iOS.jpg",
      "/timelineImages/1_First_Dances_2022-2023/10_SaraHuisDance_20230812_091958000_iOS.jpg",
      "/timelineImages/1_First_Dances_2022-2023/3_HuisFonsDance_20230516_132504000_iOS.jpg"
    ],
    title: "Dancing Through Life",
    description: "From our very first dance to many more spun around the floor. Each step bringing us closer together."
  },
  {
    category: "Adventures",
    images: [
      "/timelineImages/2_Adventures_2023/5_BoggomsBayBreakfast_20230521_135245000_iOS.jpg",
      "/timelineImages/2_Adventures_2023/6_WellingtonWeekend_20230611_203444000_iOS.jpg",
      "/timelineImages/2_Adventures_2023/7_NatureVallySundowners_20230717_151327719_iOS.jpg",
      "/timelineImages/2_Adventures_2023/8_NaturesValleyGully_20230718_095141.jpg",
      "/timelineImages/2_Adventures_2023/11_CangoCaves_20230915_124921.jpg",
      "/timelineImages/2_Adventures_2023/15_CederbergArchHike_20231001_074900000_iOS.jpg",
      "/timelineImages/2_Adventures_2023/52_ChurchhavenSailing_20250927_144035000_iOS.jpg"
    ],
    title: "Exploring Together",
    description: "Whether it's breakfast in Boggoms Bay or exploring Nature's Valley, every adventure is better with you."
  },
  {
    category: "Springbok World Cup",
    images: [
      "/timelineImages/4_SpringBokWorldCup_2023/18_SpringbokSupporters_20231022_071331000_iOS.jpg",
      "/timelineImages/4_SpringBokWorldCup_2023/19_SpringbokSupporters_20231028_194821.jpg"
    ],
    title: "Bokke!",
    description: "Cheering for the Green and Gold! United in spirit and celebration."
  },
  {
    category: "Birthdays",
    images: [
      "/timelineImages/3_Birthdays/46_OtterHikeGerritBDay_20250419_133930264_iOS.jpg",
      "/timelineImages/3_Birthdays/9_Sara21steBirthdayDate_20230806_071954000_iOS.jpg"
    ],
    title: "Birthday Celebrations",
    description: "Celebrating another year of life and love. From 21st milestones to birthdays on the trail."
  },
  {
    category: "Gerrit's Graduation",
    images: [
      "/timelineImages/5_GerritGraduation/28_GerritGraduation_20240328_141249000_iOS.jpg",
      "/timelineImages/5_GerritGraduation/20_UniversityOffice_20231116_165357.jpg"
    ],
    title: "Gerrit's Graduation",
    description: "A proud moment of achievement. Hard work paying off and new chapters beginning."
  },
  {
    category: "Cute Dates",
    images: [
      "/timelineImages/6_CuteDates/51_Churchhaven_20250926_163221298_iOS.jpg",
      "/timelineImages/6_CuteDates/17_CapeTownLife_20231022_184411.jpg",
      "/timelineImages/6_CuteDates/25_NewYearsEve2023_20231231_230200.jpg",
      "/timelineImages/6_CuteDates/26_AfrikaansOpDIePlatteland_20240210_175558.jpg",
      "/timelineImages/6_CuteDates/34_IceCreamDate_20240907_220452.jpg",
      "/timelineImages/6_CuteDates/50_Pottery_20250801_211310.jpg",
      "/timelineImages/6_CuteDates/53_JosephMusical_20251023_194753.jpg"
    ],
    title: "Sweet Moments",
    description: "It's the little things—ice cream dates, pottery classes, and quiet evenings—that make life sweet."
  },
  {
    category: "Hikes",
    images: [
      "/timelineImages/7_Hikes/23_StrandLooperHike2Bags_20231215_132353(0).jpg",
      "/timelineImages/7_Hikes/22_StrandLooperHike_20231215_104542.jpg",
      "/timelineImages/7_Hikes/24_StrandLooperHike_20231215_134004.jpg",
      "/timelineImages/7_Hikes/29_Bos400Hike_20240526_081331000_iOS.jpg",
      "/timelineImages/7_Hikes/31_TrainBridgeToVicBay_20240617_094120.jpg",
      "/timelineImages/7_Hikes/38_LionsHeadHike_20241013_081716.jpg",
      "/timelineImages/7_Hikes/39_AmatolaHike_20241220_135410.jpg",
      "/timelineImages/7_Hikes/40_AmatolaHike_20241220_155832.jpg",
      "/timelineImages/7_Hikes/41_AmatolaHike_20241222_135957.jpg",
      "/timelineImages/7_Hikes/42_AmatolaHike_20241224_083602000_iOS.jpg",
      "/timelineImages/7_Hikes/44_OtterHike_20250419_073044.jpg",
      "/timelineImages/7_Hikes/45_OtterHike_20250419_101222490_iOS.jpg",
      "/timelineImages/7_Hikes/47_OtterHike_20250421_091844.jpg",
      "/timelineImages/7_Hikes/57_DrakensbergHike_20251218_075059000_iOS.jpg",
      "/timelineImages/7_Hikes/58_DrakensbergHikeSaraFlowers_20251222_091911.jpg",
      "/timelineImages/7_Hikes/59_DrakensbergHikeCave_20251222_104221.jpg"
    ],
    title: "Hiking Trails",
    description: "Conquering mountains and walking coastlines. Every trail has a story, and we're writing ours one step at a time."
  },
  {
    category: "Weddings",
    images: [
      "/timelineImages/8_Weddings/30_RobbieElzaanWedding_20240615_134224029_iOS.jpg",
      "/timelineImages/8_Weddings/48_WianWedding_20250504_194521000_iOS.jpg",
      "/timelineImages/8_Weddings/49_WianWedding_20250707_180133000_iOS.jpg",
      "/timelineImages/8_Weddings/54_GretheWedding_20251117_151735000_iOS.jpg",
      "/timelineImages/8_Weddings/56_JJWedding_20251216_201418522_iOS.jpg"
    ],
    title: "Wedding Guests",
    description: "Witnessing love stories unfold. Celebrating with friends and dreaming of our own special day."
  },
  {
    category: "Sara's Graduation",
    images: [
      "/timelineImages/9_SaraGraduation/IMG_2514.JPG",
      "/timelineImages/9_SaraGraduation/33_SaraFinalEngineeringDance_20240802_190544000_iOS.jpg",
      "/timelineImages/9_SaraGraduation/55_SaraGraduation_20251208_140524140_iOS.jpg",
      "/timelineImages/9_SaraGraduation/IMG_2318.JPG",
      "/timelineImages/9_SaraGraduation/IMG_2374.JPG",
      "/timelineImages/9_SaraGraduation/IMG_2416.JPG"
    ],
    title: "Sara's Graduation",
    description: "Engineering degree in hand! A testament to hard work, dedication, and brilliance."
  },
  {
    category: "The Engagement",
    images: [
      "/timelineImages/10_Engagement/64_EngagementBeachPhotoShoot_20251229_181745000_iOS.jpg",
      "/timelineImages/10_Engagement/62_EngagementForest_20251229_112744.jpg",
      "/timelineImages/10_Engagement/63_EngagementPicnic_20251229_154956.jpg",
      "/timelineImages/10_Engagement/65_EngagementBeachPhotoShoot_IMG_2626.JPG",
      "/timelineImages/10_Engagement/67_EngagementBeachPhotoShoot_IMG_2631.JPG",
      "/timelineImages/10_Engagement/69_EngagementBeachPhotoShoot_IMG_2657.JPG",
      "/timelineImages/10_Engagement/70_EngagementBeachPhotoShoot_IMG_2662.JPG",
      "/timelineImages/10_Engagement/71_EngagementBeachPhotoShoot_IMG_2678.JPG",
      "/timelineImages/10_Engagement/73_EngagementBeachPhotoShoot_IMG_2682.JPG",
      "/timelineImages/10_Engagement/75_EngagementBeachPhotoShoot_IMG_2699.JPG",
      "/timelineImages/10_Engagement/76_EngagementBeachPhotoShoot_IMG_2707.JPG",
      "/timelineImages/10_Engagement/78_EngagementBeachPhotoShoot_IMG_2713.JPG"
    ],
    title: "Assume the Position",
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

    const items = document.querySelectorAll('.timeline-section');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-rustic-cream overflow-hidden" id="story">
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-24">
          <p className="text-sage-400 tracking-[0.3em] uppercase text-xs mb-4 font-sans">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-serif text-sage-900 tracking-wide">Our Journey</h2>
        </div>

        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-32 bottom-20 w-px bg-sage-300 -translate-x-1/2 hidden md:block" />

        <div className="space-y-24 relative">
          {events.map((event, index) => {
            const isVisible = visibleItems[index];
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                data-index={index}
                className={`timeline-section flex flex-col md:flex-row items-center gap-12 md:gap-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
              >
                {/* Left Side (Text if Even, Image if Odd) */}
                <div className={`flex-1 w-full text-center ${isEven ? 'md:text-right' : 'md:text-left'} order-2 md:order-1`}>
                  {isEven ? (
                    <TextContent event={event} />
                  ) : (
                    <ImageGallery images={event.images} />
                  )}
                </div>

                {/* Center Marker */}
                <div className="relative z-10 flex items-center justify-center shrink-0 order-1 md:order-2">
                  <div className={`w-4 h-4 rounded-full bg-white border-4 border-sage-400 shadow-md ${isVisible ? 'scale-100' : 'scale-0'} transition-transform duration-500 delay-300`} />
                </div>

                {/* Right Side (Image if Even, Text if Odd) */}
                <div className={`flex-1 w-full text-center ${!isEven ? 'md:text-right' : 'md:text-left'} order-3 md:order-3`}>
                  {isEven ? (
                    <ImageGallery images={event.images} />
                  ) : (
                    <TextContent event={event} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-32">
          <div className="inline-flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-sage-300" />
            <p className="text-sage-500 italic font-serif text-xl">To be continued...</p>
            <div className="w-16 h-px bg-sage-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TextContent: React.FC<{ event: TimelineEvent }> = ({ event }) => (
  <div className="px-4 md:px-0">
    <span className="inline-block px-3 py-1 mb-4 text-xs tracking-widest uppercase text-sage-500 bg-sage-50 rounded-full border border-sage-100">
      {event.category}
    </span>
    <h3 className="text-3xl font-serif text-sage-900 mb-4">{event.title}</h3>
    <p className="text-sage-600 leading-relaxed font-light text-lg max-w-md mx-auto md:mx-0 inline-block">
      {event.description}
    </p>
  </div>
);

const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  if (images.length === 0) return null;

  return (
    <div className="relative group max-w-lg mx-auto w-full aspect-[4/3] bg-sage-100 rounded-lg overflow-hidden shadow-lg ring-1 ring-sage-200/50">
      <img
        src={images[activeIndex]}
        alt={`Gallery image ${activeIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur hover:bg-white rounded-full flex items-center justify-center text-sage-800 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur hover:bg-white rounded-full flex items-center justify-center text-sage-800 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-white w-4' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
