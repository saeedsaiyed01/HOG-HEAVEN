import Link from "next/link";

type IconKind = "pin" | "phone" | "clock";

export default function IconText({
  kind,
  text,
  href,
  className = "",
}: {
  kind: IconKind;
  text: string;
  href?: string;
  className?: string;
}) {
  const icon = {
    pin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
    phone: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92V21a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07A19.5 19.5 0 013.07 12.8 19.86 19.86 0 010 4.18 2 2 0 012 2h4.09a2 2 0 012 1.72c.12.9.31 1.78.57 2.63a2 2 0 01-.45 2.11L6.1 10.9a16 16 0 006.9 6.9l2.44-2.11a2 2 0 012.11-.45c.85.26 1.73.45 2.63.57A2 2 0 0122 16.92z" />
      </svg>
    ),
    clock: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  }[kind];

  const content = (
    <span className="text-white text-[15px] leading-[20px] font-medium whitespace-nowrap">
      {text}
    </span>
  );

  return (
    <div className={["text-center", className].join(" ")}> 
      <span className="inline-flex items-center gap-3">
        {icon}
        {href ? (
          <Link href={href} className="hover:underline">
            {content}
          </Link>
        ) : (
          content
        )}
      </span>
    </div>
  );
}


