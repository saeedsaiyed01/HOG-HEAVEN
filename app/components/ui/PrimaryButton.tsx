    export default function PrimaryButton({ label }: { label: string }) {
  return (
    <button className="bg-black text-white rounded-[10px] px-6 py-3 font-balford text-[14px] leading-none tracking-[0]">
      {label}
    </button>
  );
}


