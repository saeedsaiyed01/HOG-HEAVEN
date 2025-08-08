import Image from "next/image";

export default function MapCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-[12px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
      <div className="absolute -left-4   -top-4 h-[18px] w-[18px] rounded-full bg-[#F04E3E]" />
      <div className="absolute -right-4 -bottom-4 h-[18px] w-[18px] rounded-full bg-[#F04E3E]" />
      <div className="relative h-[260px] w-[300px] sm:h-[300px] sm:w-[340px] md:h-[320px] md:w-[380px] lg:h-[350px] lg:w-[320px]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}


