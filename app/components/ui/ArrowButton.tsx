export default function ArrowButton({ direction, className = "" }: { direction: "left" | "right"; className?: string }) {
    const isLeft = direction === "left";
    return (
      <button
        aria-label={isLeft ? "Previous" : "Next"}
        className={[
          "h-8 w-8 grid place-items-center text-black/70 hover:text-black transition-colors",
          className,
        ].join(" ")}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isLeft ? (
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      </button>
    );
  }
  
  
  