"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HERO, SITE } from "@/lib/placeholder";

// TODO: replace with real client photos (1920×1080px WebP, <300KB each)
// Drop files in /public/images/ and update paths e.g. "/images/court.webp"
const SLIDES = [
  "https://images.unsplash.com/photo-1546519638405-a57897d37dc?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=1920&q=80",
];

const SLIDE_DURATION_MS = 5000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden">
      {/* Carousel background slides */}
      {SLIDES.map((src, i) => (
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
        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
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
        {SLIDES.map((_, i) => (
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
