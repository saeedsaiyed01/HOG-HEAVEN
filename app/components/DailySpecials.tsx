"use client";

import Image from "next/image";

const badgeConfig = {
  className:
    "inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-xs font-semibold text-white m-6 sm:m-32",
} as const;

const rowConfig = {
  labelClass: "text-white text-[16px] md:text-[20px]",
  dividerClass:
    "mx-3 hidden grow border-t border-dashed border-white/30 sm:block",
  priceClass: "text-white font-semibold text-[16px] md:text-[20px]",
} as const;

const stripConfig = {
  sectionBase: ["relative overflow-visible", "w-full py-4 sm:py-6"],
  tones: { brown: "bg-[#2B1E1F]", black: "bg-black" } as const,
  containerClass:
    "mx-auto px-4 sm:px-6 md:px-8 min-h-[180px] sm:min-h-[220px] flex flex-col justify-center",
  titleClass:
    "mb-3 sm:mb-4 text-center font-balford font-bold text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-tight capitalize text-white",

  innerWrapClass: "mx-auto w-full max-w-[700px]",
  childrenClass: "space-y-4 sm:space-y-5 md:space-y-6",
} as const;

const dailySpecialsContent = {
  header: {
    part1: "DAILY",
    part2: "SPECIALS",
    suffix: "- DINE IN ONLY",
  },
  overlays: {
    left: {
      containerClass:
        "hidden sm:block pointer-events-none absolute -top-12 -left-20 h-[320px] w-[320px] sm:-top-16 sm:-left-24 sm:h-[420px] sm:w-[420px] lg:-top-20 lg:-left-60 lg:h-[620px] lg:w-[520px] z-50",
      image: {
        src: "/images/daily1.png",
        alt: "Stacked steaks with peppers",
        className: "object-contain drop-shadow-2xl",
        sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 25vw",
      },
    },
    rightLogo: {
      containerClass:
        "hidden sm:block pointer-events-none absolute -top-8 right-0 h-[140px] w-[220px] sm:-top-12 sm:right-6 sm:h-[240px] sm:w-[300px] lg:-top-14 lg:right-10 lg:h-[220px] lg:w-[240px] z-50",
      image: {
        src: "/images/logo2.png",
        alt: "Boar logo",
        className: "object-contain drop-shadow",
        sizes: "(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw",
      },
    },
  },
  monday: {
    title: "Monday",
    tone: "brown" as const,
    timeBadge: "2:00pm-10:00pm",
    items: [
      { label: "Original Steak", price: "$8.50" },
      { label: "Premium Steak", price: "$10.50" },
      { label: "Monday Hogaritas", price: "$6.00" },
    ],
  },
  tuesday: {
    title: "Tuesday",
    tone: "black" as const,
    timeBadge: "2:00pm-10:00pm",
    subheading: 'Famous "HOG" Wings',
    items: [
      { label: "Boneless", price: "$.85" },
      { label: "Traditional", price: "$.99" },
    ],
    overlay: {
      containerClass:
        "hidden sm:block pointer-events-none absolute top-18.5 -right-8 h-[300px] w-[340px] -translate-y-1/2 sm:-right-12 sm:h-[380px] sm:w-[440px] lg:-right-76 lg:h-[760px] lg:w-[760px] z-50",
      image: {
        src: "/images/daily2.png",
        alt: "Seasoned steak with peppers",
        className: "object-contain drop-shadow-2xl",
        sizes: "(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 30vw",
      },
    },
  },
  wednesday: {
    title: "Wednesday",
    tone: "brown" as const,
    timeBadge: "11:00am-10:00pm",
    items: [{ label: 'Regular "HOG" Sandwich', price: "$8" }],
    overlay: {
      containerClass:
        "hidden sm:block pointer-events-none absolute top-2/12 -left-10 h-[220px] w-[260px] mt-16 -translate-y-1/2 sm:-left-16 sm:h-[300px] sm:w-[360px] lg:-left-56 lg:h-[480px] lg:w-[520px] z-50",
      image: {
        src: "/images/daily3.png",
        alt: "Ribs",
        className: "object-contain drop-shadow-2xl",
        sizes: "(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 30vw",
      },
    },
  },
  thursday: {
    title: "Thursday",
    tone: "black" as const,
    timeBadge: "2:00pm-10:00pm",
    subheading: 'Famous "HOG" Wings',
    items: [
      { label: "Boneless", price: "$.85" },
      { label: "Traditional", price: "$.99" },
    ],
    overlay: {
      containerClass:
        "hidden sm:block pointer-events-none absolute top-1/2 -right-10 h-[240px] w-[300px] -translate-y-1/2 sm:-right-14 sm:h-[320px] sm:w-[400px] lg:-right-20 lg:h-[480px] lg:w-[560px] z-50",
      image: {
        src: "/images/daily4.png",
        alt: "Glossy steak",
        className: "object-contain drop-shadow-2xl",
        sizes: "(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 30vw",
      },
    },
  },
  longIsland: {
    title: "Long Island Night",
    tone: "brown" as const,
    timeBadge: "2:00pm-8:00pm",
    bottomLeftOverlay: {
      containerClass:
        "hidden sm:block pointer-events-none absolute -bottom-10 -left-12 h-[240px] w-[340px] sm:-left-16 sm:-bottom-14 sm:h-[300px] sm:w-[420px] lg:-left-32 lg:-bottom-2 lg:h-[380px] lg:w-[520px] z-50",
      image: {
        src: "/images/daily5.png",
        alt: "Grilled steak bottom",
        className: "object-contain drop-shadow-2xl",
        sizes: "(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 30vw",
      },
    },
    priceTag: {
      containerClass:
        "pointer-events-none absolute bottom-[-120px] -right-20 z-50 rotate-12 h-[120px] w-[200px] sm:h-[160px] sm:w-[280px] lg:h-[420px] lg:w-[520px]",
      image: {
        src: "/images/daily6.png",
        alt: "Price tag",
        className: "object-contain",
        sizes: "(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 30vw",
        amountText: "$6.00",
      },
    },
  },
} as const;

// Types
type MenuItem = {
  label: string;
  price: string;
  note?: string;
  noteClass?: string;
};

function Badge({ children }: { children: React.ReactNode }) {
  return <span className={badgeConfig.className}>{children}</span>;
}

function Row({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-center justify-between">
      <span className={rowConfig.labelClass}>{item.label}</span>
      <div className={rowConfig.dividerClass} />
      <div className="flex items-center gap-3">
        {item.note ? <Badge>{item.note}</Badge> : null}
        <span className={rowConfig.priceClass}>{item.price}</span>
      </div>
    </div>
  );
}

function Strip({
  title,
  tone,
  children,
  className = "",
}: {
  title: string;
  tone: "black" | "brown";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      aria-label={title}
      className={[
        ...stripConfig.sectionBase,
        tone === "brown" ? stripConfig.tones.brown : stripConfig.tones.black,
        className,
      ].join(" ")}
    >
      <div className={stripConfig.containerClass}>
        <h3 className={stripConfig.titleClass}>{title}</h3>
        <div className={stripConfig.innerWrapClass}>
          <div className={stripConfig.childrenClass}>{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function DailySpecials() {
  return (
    <main className="relative bg-black overflow-x-clip">
      {/* Header */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 min-h-[220px] sm:min-h-[262.37px] flex items-center justify-center">
        <h1 className="text-center font-tt-modernoir font-semibold text-white capitalize tracking-[0] text-[32px] sm:text-[52px] md:text-[58px] lg:text-[64px] leading-[36px] sm:leading-[56px] md:leading-[62px] lg:leading-[68px]">
          {dailySpecialsContent.header.part1} <span className="text-red-500">{dailySpecialsContent.header.part2}</span>
          {dailySpecialsContent.header.suffix}
        </h1>

        <div className={dailySpecialsContent.overlays.left.containerClass}>
          <div className="relative h-full w-full mt-10">
            <Image
              src={dailySpecialsContent.overlays.left.image.src}
              alt={dailySpecialsContent.overlays.left.image.alt}
              fill
              className={dailySpecialsContent.overlays.left.image.className}
              sizes={dailySpecialsContent.overlays.left.image.sizes}
              priority
            />
          </div>
        </div>

        <div className={dailySpecialsContent.overlays.rightLogo.containerClass}>
          <div className="relative h-full w-full mt-42">
            <Image
              src={dailySpecialsContent.overlays.rightLogo.image.src}
              alt={dailySpecialsContent.overlays.rightLogo.image.alt}
              fill
              className={dailySpecialsContent.overlays.rightLogo.image.className}
              sizes={dailySpecialsContent.overlays.rightLogo.image.sizes}
              priority
            />
          </div>
        </div>
      </section>

      <Strip title={dailySpecialsContent.monday.title} tone={dailySpecialsContent.monday.tone}>
        <div className="absolute right-4 sm:right-8 top-4 sm:top-8">
          <Badge>{dailySpecialsContent.monday.timeBadge}</Badge>
        </div>
        <Row item={dailySpecialsContent.monday.items[0]} />
        <Row item={dailySpecialsContent.monday.items[1]} />
        <Row item={dailySpecialsContent.monday.items[2]} />
      </Strip>

      <Strip title={dailySpecialsContent.tuesday.title} tone={dailySpecialsContent.tuesday.tone}>
        <div className="absolute left-4 sm:left-8 top-4 sm:top-8">
          <Badge>{dailySpecialsContent.tuesday.timeBadge}</Badge>
        </div>
        <div className="text-center">
          <div className="mt-1 text-red-500 text-lg sm:text-xl md:text-2xl font-semibold">
            {dailySpecialsContent.tuesday.subheading}
          </div>
        </div>
        <Row item={dailySpecialsContent.tuesday.items[0]} />
        <Row item={dailySpecialsContent.tuesday.items[1]} />

        <div className={dailySpecialsContent.tuesday.overlay.containerClass}>
          <div className="relative h-full w-full">
            <Image
              src={dailySpecialsContent.tuesday.overlay.image.src}
              alt={dailySpecialsContent.tuesday.overlay.image.alt}
              fill
              className={dailySpecialsContent.tuesday.overlay.image.className}
              sizes={dailySpecialsContent.tuesday.overlay.image.sizes}
            />
          </div>
        </div>
      </Strip>

      <Strip title={dailySpecialsContent.wednesday.title} tone={dailySpecialsContent.wednesday.tone}>
        <div className="absolute right-4 sm:right-8 top-4  mb-16 sm:top-8">
          <Badge>{dailySpecialsContent.wednesday.timeBadge}</Badge>
        </div>
        <Row item={dailySpecialsContent.wednesday.items[0]} />

        <div className={dailySpecialsContent.wednesday.overlay.containerClass}>
          <div className="relative h-full w-full">
            <Image
              src={dailySpecialsContent.wednesday.overlay.image.src}
              alt={dailySpecialsContent.wednesday.overlay.image.alt}
              fill
              className={dailySpecialsContent.wednesday.overlay.image.className}
              sizes={dailySpecialsContent.wednesday.overlay.image.sizes}
            />
          </div>
        </div>
      </Strip>

      <Strip title={dailySpecialsContent.thursday.title} tone={dailySpecialsContent.thursday.tone}>
        <div className="absolute left-4 sm:left-8 top-4 sm:top-8">
          <Badge>{dailySpecialsContent.thursday.timeBadge}</Badge>
        </div>
        <div className="text-center">
          <div className="mt-1 text-red-500 text-lg sm:text-xl md:text-2xl font-semibold">
            {dailySpecialsContent.thursday.subheading}
          </div>
        </div>
        <Row item={dailySpecialsContent.thursday.items[0]} />
        <Row item={dailySpecialsContent.thursday.items[1]} />

        <div className={dailySpecialsContent.thursday.overlay.containerClass}>
          <div className="relative h-full w-full ml-0 sm:ml-50">
            <Image
              src={dailySpecialsContent.thursday.overlay.image.src}
              alt={dailySpecialsContent.thursday.overlay.image.alt}
              fill
              className={dailySpecialsContent.thursday.overlay.image.className}
              sizes={dailySpecialsContent.thursday.overlay.image.sizes}
            />
          </div>
        </div>
      </Strip>

      <Strip title={dailySpecialsContent.longIsland.title} tone={dailySpecialsContent.longIsland.tone}>
        <div className={dailySpecialsContent.longIsland.bottomLeftOverlay.containerClass}>
          <div className="relative h-full w-120px mr-0 sm:mr-28">
            <Image
              src={dailySpecialsContent.longIsland.bottomLeftOverlay.image.src}
              alt={dailySpecialsContent.longIsland.bottomLeftOverlay.image.alt}
              fill
              className={dailySpecialsContent.longIsland.bottomLeftOverlay.image.className}
              sizes={dailySpecialsContent.longIsland.bottomLeftOverlay.image.sizes}
            />
          </div>
        </div>

        <div className={dailySpecialsContent.longIsland.priceTag.containerClass}>
          <div className="relative h-full w-full">
            <Image
              src={dailySpecialsContent.longIsland.priceTag.image.src}
              alt={dailySpecialsContent.longIsland.priceTag.image.alt}
              fill
              className={dailySpecialsContent.longIsland.priceTag.image.className}
              sizes={dailySpecialsContent.longIsland.priceTag.image.sizes}
            />
            <span className="absolute left-2/3 top-2/3 sm:left-2/6 sm:top-2/4 mt-6 -translate-x-1/2  ml-8 -translate-y-1/2 rotate-[-20deg] sm:rotate-[-42deg] text-white font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight">
              {dailySpecialsContent.longIsland.priceTag.image.amountText}
            </span>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-4 sm:top-8">
          <Badge>{dailySpecialsContent.longIsland.timeBadge}</Badge>
        </div>
      </Strip>
    </main>
  );
}
