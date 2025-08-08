import Image from "next/image";

// Static content used by LunchSpecials
const lunchSpecialsContent = {
  badgeText: "DINE IN ONLY",
  title: { primary: "LUNCH", secondary: "SPECIALS" },
  description: {
    line1: "Try our FAST and AFFORDABLE Lunch Specials Only $9.99",
    line2: "Monday - Friday 11:00am - 2:00pm",
  },
  ctaLabel: "View More",
  images: [
    {
      src: "/images/special1.jpg",
      alt: "Grilled steak with chimichurri",
      wrapperClass:
        "sm:col-span-2 lg:col-span-2 relative aspect-[3/2] rounded-[12px] overflow-hidden",
    },
    {
      src: "/images/special2.jpg",
      alt: "BBQ skewers",
      wrapperClass: "relative aspect-[2/3] rounded-[12px] overflow-hidden",
    },
    {
      src: "/images/special3.jpg",
      alt: "Grilled ribs",
      wrapperClass: "relative aspect-[2/3] rounded-[12px] overflow-hidden",
    },
    {
      src: "/images/special4.jpg",
      alt: "Glazed BBQ steaks",
      wrapperClass:
        "sm:col-span-2 lg:col-span-2 relative aspect-[3/2] rounded-[12px] overflow-hidden",
    },
    {
      src: "/images/special5.jpg",
      alt: "Sliced BBQ brisket",
      wrapperClass:
        "sm:col-span-2 lg:col-span-2 relative aspect-[3/2] rounded-[12px] overflow-hidden",
    },
  ],
} as const;

export default function LunchSpecials() {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 sm:mb-8 flex-wrap gap-4">
          <div>
            <p className="text-red-500 font- text-2xl uppercase font-tt-modernoir  tracking-wider mb-2">
              {lunchSpecialsContent.badgeText}
            </p>
            <h2 className="font-tt-modernoir text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-none">
              <span className="text-[#F04E3E]">{lunchSpecialsContent.title.primary}</span>{" "}
              <span className="text-black">{lunchSpecialsContent.title.secondary}</span>
            </h2>
            <p className="text-black/80 font-tt-modernoir text-sm md:text-base mt-3 sm:mt-4 max-w-md leading-snug">
              {lunchSpecialsContent.description.line1}
              <br />
              {lunchSpecialsContent.description.line2}
            </p>
          </div>
          <button className="inline-flex items-center gap-2 bg-[#F04E3E] hover:bg-[#e54533] text-white px-5 py-2 rounded-full font-sans text-sm tracking-wide transition-colors duration-200">
            {lunchSpecialsContent.ctaLabel}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Image Grid - Exactly 2 Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lunchSpecialsContent.images.map((img, idx) => (
            <div key={idx} className={img.wrapperClass}>
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
