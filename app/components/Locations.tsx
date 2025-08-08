"use client";

import Image from "next/image";
import ArrowButton from "./ui/ArrowButton";
import Avatar from "./ui/Avatar";
import IconText from "./ui/IconText";
import MapCard from "./ui/MapCard";
import PrimaryButton from "./ui/PrimaryButton";
import StarRating from "./ui/StarRating";

const locationsContent = {
  header: {
    avatar: { src: "/images/pfp1.jpg", alt: "Ayma Lissa", size: 126 },
    name: "AYNA LISSA",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  background: {
    src: "/images/location.jpg",
    alt: "Rustic steak and herbs background",
  },
  sectionTitle: "HOG HEAVEN BBQ - 2 LOCATIONS IN NE OHIO",
  infoCard: {
    title: "1. DOVER",
    address: "6557 Columbia Rd NW Dover, OH 44622",
    phoneDisplay: "(330) 878-0038",
    phoneHref: "tel:+13308780038",
    hours: [
      "Monday - Saturday: 11:00 am - 10:00 pm",
      "Sunday: 11:00 am - 9:00 am",
    ],
    ctaLabel: "Get Direction",
  },
  map: { src: "/images/map.png", alt: "Map to Dover location" },
} as const;

export default function Locations() {
  return (
    <section aria-label="Locations showcase" className="w-full">
      {/* Testimonial Header */}
      <div className="relative bg-white w-full">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 py-8 sm:py-12 relative">
          <ArrowButton direction="left" className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2" />
          <ArrowButton direction="right" className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2" />

          <div className="mx-auto grid grid-cols-[96px,1fr,auto] sm:grid-cols-[126px,1fr,auto] gap-x-6 sm:gap-x-10 items-center">
            <div className="row-span-2 justify-self-start self-center">
              <Avatar src={locationsContent.header.avatar.src} alt={locationsContent.header.avatar.alt} size={96} />
            </div>

            <h3 className="col-start-2 col-end-3 self-end font-tt-modernoir text-[22px] sm:text-[30px] leading-none tracking-[0] text-black uppercase">
              {locationsContent.header.name}
            </h3>

            <div className="col-start-3 col-end-4 self-center justify-self-end">
              <StarRating value={locationsContent.header.rating} />
            </div>

            <p className="col-start-2 col-end-4 sm:col-end-3 mt-3 text-[11px] sm:text-[10px] leading-[16px] sm:leading-[14px] text-black/80 max-w-[620px]">
              {locationsContent.header.description}
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image src={locationsContent.background.src} alt={locationsContent.background.alt} fill priority className="object-cover -scale-x-100" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-8 sm:pt-10 pb-12 sm:pb-16">
          <h2 className="text-center sm:text-end font-tt-modernoir text-white uppercase tracking-[0] text-[22px] sm:text-[32px] md:text-[36px] leading-[1] drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]">
            {locationsContent.sectionTitle}
          </h2>

          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-[minmax(380px,520px)_minmax(520px,1fr)] gap-6 md:gap-10 items-start relative">
            <div className="order-2 md:order-1 w-full self-start bg-[#F04E3E] rounded-[18px] px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14 shadow-[0_10px_30px_rgba(0,0,0,0.45)] relative z-10 min-h-[280px] sm:min-h-[320px]">
              <div className="font-tt-modernoir text-white uppercase tracking-[0] text-[24px] sm:text-[28px] md:text-[34px] leading-none mb-6 sm:mb-8 text-center">
                {locationsContent.infoCard.title}
              </div>
              <div className="flex justify-center align-middle">
                <div className="space-y-4 sm:space-y-5">
                  <IconText kind="pin" text={locationsContent.infoCard.address} />
                  <IconText kind="phone" text={locationsContent.infoCard.phoneDisplay} href={locationsContent.infoCard.phoneHref} />
                  <IconText kind="clock" text={locationsContent.infoCard.hours[0]} />
                  <IconText kind="clock" text={locationsContent.infoCard.hours[1]} />
                </div>
              </div>
              <div className="mt-8 sm:mt-10 flex justify-center">
                <PrimaryButton label={locationsContent.infoCard.ctaLabel} />
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end mt-6 md:mt-10">
              <div className="relative z-20 md:-mr-20 lg:-mr-28 md:-mt-2 md:mb-10 mt-4">
                <MapCard src={locationsContent.map.src} alt={locationsContent.map.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
