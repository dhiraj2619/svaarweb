export default function ContactButton() {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-5 z-40 flex items-center gap-3 bg-brand px-5 py-3.5 text-[16px] font-medium text-white shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-colors hover:bg-brand-dark md:bottom-10 md:right-10 md:px-6 md:py-4 md:text-[18px]"
    >
      Contact us
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m3.5 6 8.5 7 8.5-7" />
      </svg>
    </a>
  );
}
