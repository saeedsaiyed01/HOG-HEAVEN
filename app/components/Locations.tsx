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
      <div className="relative bg-white w-full">
        <div className="mx-auto max-w-[1000px] px-6 py-12 relative">
          <ArrowButton
            direction="left"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          />
          <ArrowButton
            direction="right"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />

          <div className="mx-auto grid grid-cols-[126px,1fr,auto] gap-x-10 items-center">
            <div className="row-span-2 justify-self-start self-center">
              <Avatar
                src={locationsContent.header.avatar.src}
                alt={locationsContent.header.avatar.alt}
                size={locationsContent.header.avatar.size}
              />
            </div>

            <h3 className="col-start-2 col-end-3 self-end font-tt-modernoir text-[30px] leading-none tracking-[0] text-black uppercase">
              {locationsContent.header.name}
            </h3>

            <div className="col-start-3 col-end-4 self-center justify-self-end">
              <StarRating value={locationsContent.header.rating} />
            </div>

            <p className="col-start-2 col-end-3 mt-3 text-[10px] leading-[14px] text-black/80 max-w-[620px]">
              {locationsContent.header.description}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={locationsContent.background.src}
            alt={locationsContent.background.alt}
            fill
            priority
            className="object-cover -scale-x-100"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6 pt-10 pb-16">
          <h2 className="text-end font-tt-modernoir text-white uppercase tracking-[0] text-[26px] sm:text-[32px] md:text-[36px] leading-[1] drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]">
            {locationsContent.sectionTitle}
          </h2>

          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-[minmax(420px,520px)_minmax(600px,1fr)] gap-6 md:gap-10 items-start relative">
            <div className="order-8 w-full self-start bg-[#F04E3E] rounded-[18px] px-8 md:px-12 py-10 md:py-14 shadow-[0_10px_30px_rgba(0,0,0,0.45)] relative z-10 min-h-[320px] min-w-[580px]">
              <div className="font-tt-modernoir text-white uppercase tracking-[0] text-[28px] md:text-[34px] leading-none mb-8 text-center">
                {locationsContent.infoCard.title}
              </div>
              <div className="flex justify-center align-middle">
                <div className="space-y-5">
                  <IconText
                    kind="pin"
                    text={locationsContent.infoCard.address}
                  />
                  <IconText
                    kind="phone"
                    text={locationsContent.infoCard.phoneDisplay}
                    href={locationsContent.infoCard.phoneHref}
                  />
                  <IconText
                    kind="clock"
                    text={locationsContent.infoCard.hours[0]}
                  />
                  <IconText
                    kind="clock"
                    text={locationsContent.infoCard.hours[1]}
                  />
                </div>
              </div>
              <div className="mt-10 flex justify-center">
                <PrimaryButton label={locationsContent.infoCard.ctaLabel} />
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <div className="order-1 relative z-20 md:-mr-28 lg:-mr-38 md:-mt-2 md:mb-10  mt-12 justify-self-center md:justify-self-end">
                <MapCard
                  src={locationsContent.map.src}
                  alt={locationsContent.map.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
