"use client";

import { useState, useEffect } from "react";

const PHOTOS = [
  "/coach-al.jpeg",
  "/coach-al-2.png",
  "/coach-al-3.png",
  "/coach-al-4.png",
  "/coach.jpg",
  "/coach2.png",
  "/cover-1.jpg",
  "/cover-2.jpg",
  "/cover-3.png",
  "/points.png",
  "/points-2.png",
  "/tns-2.jpg",
  "/tns-4.png",
  "/tns-5.png",
  "/tns-6.png",
  "/tns-7.png",
  "/tns-8.png",
  "/tsu.png",
  "/cover-4.jpg",
  "/cover-5.png",
];

const VIDEOS = [
  "/tns-vid-2.MOV",
  "/tns-vid-3.mov",
];

export default function MediaGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
      {/* Photos */}
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-400">Gallery</p>
      <h1 className="mb-12 text-5xl font-extrabold">Photos</h1>
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {PHOTOS.map((src) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            onClick={() => setSelected(src)}
            className="mb-4 w-full rounded-xl break-inside-avoid cursor-pointer transition-opacity hover:opacity-80"
          />
        ))}
      </div>

      {/* Videos */}
      <h2 className="mb-12 mt-24 text-5xl font-extrabold">Videos</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((src) => (
          <video
            key={src}
            src={src}
            controls
            playsInline
            className="w-full rounded-xl bg-slate-800"
          />
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelected(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
          />
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute right-6 top-6 text-white/70 hover:text-white text-3xl leading-none"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
