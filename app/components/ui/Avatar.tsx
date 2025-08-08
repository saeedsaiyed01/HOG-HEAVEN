import Image from "next/image";

export default function Avatar({ src, alt, size = 96 }: { src: string; alt: string; size?: number }) {
  return (
    <div
      className="relative rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}


