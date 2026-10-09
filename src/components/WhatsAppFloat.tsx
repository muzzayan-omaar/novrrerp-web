"use client";

/**
 * Floating WhatsApp CTA.
 * NEXT_PUBLIC_WHATSAPP_NUMBER = digits only + country code, e.g. 2567XXXXXXXX
 * Optional NEXT_PUBLIC_WHATSAPP_MESSAGE for prefilled text.
 */
export function WhatsAppFloat() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;

  const preset =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Hi NOVRR — I want to learn more about the ERP for my shop.";
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(preset)}`;

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto group relative flex h-14 w-14 items-center justify-center"
      >
        {/* Thought bubble — above the button, no layout shift */}
        <span
          className="absolute bottom-[calc(100%+14px)] right-0 whitespace-nowrap rounded-2xl bg-white px-3.5 py-2 text-[13px] font-semibold text-nova-900 opacity-0 shadow-[0_10px_28px_-8px_rgba(15,27,51,0.28)] ring-1 ring-slate-200/90 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden
        >
          Chat with us
          {/* tail pointing down toward the icon */}
          <span
            aria-hidden
            className="absolute -bottom-[6px] right-5 block h-0 w-0 border-l-[7px] border-r-[7px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"
          />
        </span>

        {/* Fixed green circle */}
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_-6px_rgba(37,211,102,0.55)] transition duration-200 group-hover:scale-105 group-hover:shadow-[0_12px_32px_-4px_rgba(37,211,102,0.65)]">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      </a>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}