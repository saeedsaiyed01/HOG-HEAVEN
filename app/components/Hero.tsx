import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/main.jpg"
          alt="Grilled BBQ meat background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
            {/* Left Side Content */}
            <div className="text-white space-y-8 w-full max-w-none">
              <h1 className="font-tt-modernoir text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] leading-[0.85] tracking-tight uppercase font-bold whitespace-nowrap">
                HOG HEAVEN...
              </h1>

              <p className="font-tt-modernoir text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[1.1] tracking-wide text-white font-semibold">
                BBQ THE WAY IT WAS MEANT <br /> TO BE
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="font-balford font-light bg-[#F64835]  text-white px-8 py-4 text-[24px] leading-[100%] tracking-[0%] uppercase transition-colors duration-300 rounded-lg">
                  ORDER NOW
                </button>
                <button className="font-balford font-light bg-black/80 border border-white text-white px-10 py-4 text-[24px] leading-[100%] tracking-[0%] uppercase transition-colors duration-300 rounded-lg">
                  MENU
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative h-full">
              <div className="absolute bottom-[-180px]  left-120 w-44 h-44">
                <Image
                  src="/images/logo2.png"
                  alt="Hog Heaven Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
