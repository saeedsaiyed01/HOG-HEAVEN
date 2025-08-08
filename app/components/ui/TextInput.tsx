export default function TextInput({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-[54px] w-[320px] rounded-[10px] bg-transparent border border-white/60 px-4 text-white placeholder-white/90 focus:outline-none"
    />
  );
}
