"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HERO, SITE } from "@/lib/placeholder";

const SLIDES = [
  "/cover-1.jpg",
  "/cover-2.jpg",
  "/cover-3.png",
  "/cover-4.jpg",
  "/cover-5.png",
];

const SLIDE_DURATION_MS = 5000;

export default function HeroSection() {
  const [loaded, setLoaded] = useState<boolean[]>(() => SLIDES.map(() => false));
  const [current, setCurrent] = useState(0);

  // Preload all images; mark each as loaded (or skip if broken)
  useEffect(() => {
    SLIDES.forEach((src, i) => {
      const img = new window.Image();
      img.onload = () =>
        setLoaded((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      img.onerror = () => {}; // leave false — slide stays hidden
      img.src = src;
    });
  }, []);

  const loadedSlides = SLIDES.filter((_, i) => loaded[i]);

  useEffect(() => {
    if (loadedSlides.length < 2) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % loadedSlides.length),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(id);
  }, [loadedSlides.length]);

  return (
    <section className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden bg-slate-900">
      {/* Carousel background slides */}
      {loadedSlides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-slate-900/65" aria-hidden="true" />

      {/* Blue accent line top */}
      <div className="absolute left-0 top-0 h-1 w-full bg-blue-600" aria-hidden="true" />

      {/* Content */}
      <div className="relative flex flex-col items-center px-6 text-center text-white">
        {/* Brand name */}
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-400">
          Welcome to
        </p>
        <h1 className="max-w-2xl text-6xl leading-tight tracking-wider sm:text-7xl" style={{ fontFamily: "var(--font-bebas-neue)" }}>
          The Next Step
          <span className="block text-blue-400">Basketball Training</span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
          {HERO.subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/training"
            className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Explore Programs
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Carousel dot indicators */}
      <div className="absolute bottom-8 flex gap-2">
        {loadedSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-blue-400" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Pink accent line bottom */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-pink-500" aria-hidden="true" />
    </section>
  );
}
