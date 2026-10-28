"use client";

import { useState } from "react";
import { albumCheckpoints, AlbumCheckpoint } from "@/data/album";
import { useApp } from "@/context/AppContext";

export function MemoryAlbum() {
  const { locale, t } = useApp();
  const [selectedImage, setSelectedImage] = useState<AlbumCheckpoint | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [imagePaths, setImagePaths] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    albumCheckpoints.forEach((cp) => {
      initial[cp.id] = cp.image;
    });
    return initial;
  });

  function handleImageError(cp: AlbumCheckpoint) {
    const current = imagePaths[cp.id] || cp.image;
    const candidates = [cp.image, ...(cp.altImages || [])];
    const currentIndex = candidates.indexOf(current);
    if (currentIndex >= 0 && currentIndex < candidates.length - 1) {
      const next = candidates[currentIndex + 1];
      setImagePaths((prev) => ({ ...prev, [cp.id]: next }));
    } else {
      setFailedImages((prev) => ({ ...prev, [cp.id]: true }));
    }
  }

  return (
    <section className="mt-12 w-full">
      {/* Album Header */}
      <div className="text-center">
        <span className="inline-block rounded-full border border-gold/50 bg-gold-soft/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-rose-ink">
          {locale === "fr" ? "Nostalgie & Amour Fraternel" : "Nostalgia & Brotherly Love"}
        </span>
        <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
          {t("albumTitle")}
        </h2>
        <p className="mt-1 text-sm text-rose-ink/75 sm:text-base">
          {t("albumSub")}
        </p>
      </div>

      {/* Checkpoints Timeline */}
      <div className="relative mt-8 space-y-8 before:absolute before:bottom-6 before:left-5 before:top-4 before:w-0.5 before:bg-gradient-to-b before:from-gold before:via-blush-300 before:to-gold md:before:left-1/2 md:before:-translate-x-1/2">
        {albumCheckpoints.map((cp, idx) => {
          const isError = failedImages[cp.id];
          const currentImg = imagePaths[cp.id] || cp.image;
          const title = locale === "fr" ? cp.title_fr : cp.title_en;
          const caption = locale === "fr" ? cp.caption_fr : cp.caption_en;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={cp.id}
              className={`relative flex flex-col md:flex-row items-start gap-4 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Checkpoint Marker Pin */}
              <div className="absolute left-2.5 top-5 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-gold text-[10px] font-bold text-rose-ink shadow-md md:left-1/2">
                {cp.stepNumber}
              </div>

              {/* Card Container */}
              <div
                className={`ml-9 w-[calc(100%-2.5rem)] md:ml-0 md:w-[calc(50%-1.75rem)] rounded-3xl border border-blush-200 bg-white p-4 shadow-soft transition-all hover:shadow-md ${
                  isEven ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Checkpoint Badge Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blush-100 pb-3">
                  <span className="rounded-full bg-gold-soft/80 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-rose-ink">
                    Checkpoint {cp.stepNumber}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-rose-ink/65">
                    <span>{cp.location}</span>
                    <span>•</span>
                    <span>{cp.date}</span>
                  </div>
                </div>

                <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-rose-ink">
                  {title}
                </h3>

                {/* Photo Frame (Polaroid Inspired, 4:5 Portrait Ratio) */}
                <div className="relative mt-3 overflow-hidden rounded-2xl bg-cream/50 shadow-inner">
                  {!isError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={currentImg}
                      alt={title}
                      onError={() => handleImageError(cp)}
                      onClick={() => setSelectedImage(cp)}
                      className="aspect-[4/5] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex aspect-[4/5] w-full flex-col items-center justify-center border-2 border-dashed border-blush-300 bg-cream/40 p-4 text-center">
                      <span className="text-3xl" aria-hidden>
                        📸
                      </span>
                      <p className="mt-2 text-xs font-semibold text-rose-ink">
                        {cp.placeholderHint}
                      </p>
                      <p className="mt-1 text-[11px] text-rose-ink/60">
                        Ajoute ta photo dans :
                      </p>
                      <code className="mt-1 rounded bg-white px-2 py-0.5 font-mono text-[10px] text-rose-ink/80 shadow-xs">
                        public{cp.image}
                      </code>
                    </div>
                  )}
                </div>

                {/* Caption / Story */}
                <p className="mt-3 text-xs leading-relaxed text-rose-ink/85 sm:text-sm">
                  {caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-lg flex-col items-center justify-center overflow-hidden rounded-3xl bg-white p-4 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg font-bold text-white hover:bg-black/80"
              aria-label="Fermer"
            >
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagePaths[selectedImage.id] || selectedImage.image}
              alt={locale === "fr" ? selectedImage.title_fr : selectedImage.title_en}
              className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-md"
            />
            <h4 className="mt-3 font-serif text-lg font-bold text-rose-ink">
              {locale === "fr" ? selectedImage.title_fr : selectedImage.title_en}
            </h4>
            <p className="mt-1 text-xs text-rose-ink/80 sm:text-sm">
              {locale === "fr" ? selectedImage.caption_fr : selectedImage.caption_en}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
