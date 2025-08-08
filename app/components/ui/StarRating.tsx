export default function StarRating({ value = 5 }: { value?: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < value);
  return (
    <div className="flex items-center gap-1">
      {stars.map((filled, idx) => (
        <svg
          key={idx}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={filled ? "#FFC83A" : "none"}
          stroke="#FFC83A"
          strokeWidth="2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}


