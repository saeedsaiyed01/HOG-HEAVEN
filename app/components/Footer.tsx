import Image from "next/image";
import TextInput from "./ui/TextInput";

const footerContent = {
  spacerClass: "bg-white h-[64px] w-full",
  reservationHero: {
    sizes: { h: "h-[420px]", sm: "sm:h-[460px]", md: "md:h-[520px]" },
    image: { src: "/images/image.png", alt: "Grill background" },
    overlayClass: "absolute inset-0 bg-black/40",
    heading: { primary: "RESERVE", secondary: "YOUR SPOT" },
    inputs: [
      { placeholder: "Name" },
      { placeholder: "Time", hasChevron: true },
      { placeholder: "Day & Date", hasChevron: true },
    ],
    cta: { label: "Reserve" },
  },
  bottom: {
    logo: { src: "/images/logo.png", alt: "Hog Heaven Logo" },
    links: {
      left: [
        "Home",
        "Catering Inquiry",
        "Online Ordering",
        "Menu",
        "Online Store",
      ],
      right: ["Locations", "Events", "About", "Catering Menu"],
    },
    search: { icon: { src: "/images/search.png", alt: "Search", size: 18 } },
    legal: "Privacy Policy / Terms & Conditions",
    socials: [
      { src: "/images/fb.png", alt: "Facebook" },
      { src: "/images/insta.png", alt: "Instagram" },
      { src: "/images/tiktok.png", alt: "TikTok" },
    ],
  },
} as const;

export default function Footer() {
  return (
    <footer className="w-full">
      <div className={footerContent.spacerClass} />

      <section
        className={[
          "relative w-full overflow-hidden",
          footerContent.reservationHero.sizes.h,
          footerContent.reservationHero.sizes.sm,
          footerContent.reservationHero.sizes.md,
        ].join(" ")}
      >
        <Image
          src={footerContent.reservationHero.image.src}
          alt={footerContent.reservationHero.image.alt}
          fill
          className="object-cover"
          priority
        />
        <div className={footerContent.reservationHero.overlayClass} />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-full max-w-5xl px-6">
            <h3 className="text-center">
              <span className="font-tt-modernoir text-[46px] leading-none tracking-[0] text-white uppercase ">
                <span className="text-[#F04E3E]">
                  {footerContent.reservationHero.heading.primary}
                </span>{" "}
                {footerContent.reservationHero.heading.secondary}
              </span>
            </h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-[320px_320px_320px_auto] gap-4 justify-center">
              <TextInput
                placeholder={
                  footerContent.reservationHero.inputs[0].placeholder
                }
              />
              <div className="relative">
                <TextInput
                  placeholder={
                    footerContent.reservationHero.inputs[1].placeholder
                  }
                />
                {footerContent.reservationHero.inputs[1].hasChevron && (
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white">
                    ▾
                  </span>
                )}
              </div>
              <div className="relative">
                <TextInput
                  placeholder={
                    footerContent.reservationHero.inputs[2].placeholder
                  }
                />
                {footerContent.reservationHero.inputs[2].hasChevron && (
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white">
                    ▾
                  </span>
                )}
              </div>
              <button className="h-[54px] px-8 rounded-[10px] bg-[#F04E3E] text-white font-extralight text-[16px]">
                {footerContent.reservationHero.cta.label}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-10">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-16 items-start">
          <div className="flex items-start">
            <div className="relative h-[120px] w-[120px]">
              <Image
                src={footerContent.bottom.logo.src}
                alt={footerContent.bottom.logo.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 justify-center">
            <div className="space-y-4">
              {footerContent.bottom.links.left.map((label) => (
                <FooterLink key={label}>{label}</FooterLink>
              ))}
            </div>
            <div className="space-y-4">
              {footerContent.bottom.links.right.map((label) => (
                <FooterLink key={label}>{label}</FooterLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end space-y-4">
            <div className="relative">
              <input
                className="h-[44px] w-[260px] bg-transparent border border-white/50 rounded-[8px] px-4 pr-10 placeholder-white/70"
                placeholder=""
              />
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <Image
                  src={footerContent.bottom.search.icon.src}
                  alt={footerContent.bottom.search.icon.alt}
                  width={footerContent.bottom.search.icon.size}
                  height={footerContent.bottom.search.icon.size}
                />
              </div>
            </div>
            <div className="text-xs text-white/70">
              {footerContent.bottom.legal}
            </div>
            <div className="flex items-center gap-5">
              {footerContent.bottom.socials.map((s) => (
                <Social key={s.alt}>
                  <Image src={s.src} alt={s.alt} width={18} height={18} />
                </Social>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

const footerLinkConfig = {
  className: "font-balford text-[14px] leading-[20px] text-white/90",
} as const;

function FooterLink({ children }: { children: React.ReactNode }) {
  return <div className={footerLinkConfig.className}>{children}</div>;
}

const socialConfig = {
  wrapperClass:
    "h-9 w-9 grid place-items-center rounded-full border border-white/50 text-white/90 text-lg",
} as const;

function Social({ children }: { children: React.ReactNode }) {
  return <div className={socialConfig.wrapperClass}>{children}</div>;
}
