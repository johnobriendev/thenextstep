import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Basketball training programs for players at every level.",
};

export default function TrainingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="flex min-h-screen flex-col justify-center bg-slate-900 text-white">
        {/* Desktop: logo left, content right — Mobile: logo top, content bottom */}
        <div className="grid min-h-screen lg:grid-cols-2">

          {/* Logo half */}
          <div className="flex items-center justify-center bg-slate-900 py-16 px-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/TNS-logo.PNG"
              alt="The Next Step Basketball Training"
              className="w-56 sm:w-72 lg:w-80"
            />
          </div>

          {/* Programs half */}
          <div className="flex flex-col justify-center bg-slate-800 px-8 py-16 lg:px-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-400">
              What We Offer
            </p>
            <h1 className="mb-10 text-4xl font-extrabold leading-tight">
              Programs
            </h1>
            {/* TODO: update with real programs once confirmed */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* What to expect */}
      <section className="flex min-h-screen flex-col justify-center bg-slate-50 py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="mb-12 text-3xl font-extrabold text-slate-900">
            What to Expect
          </h2>
          {/* TODO: replace with real training breakdown content */}
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Assessment",
                body: "We start with a baseline evaluation to understand your strengths, weaknesses, and goals.",
              },
              {
                step: "02",
                title: "Custom Plan",
                body: "A training plan is built specifically for you — focused on the areas that will move the needle most.",
              },
              {
                step: "03",
                title: "Track Progress",
                body: "Regular check-ins and video review ensure you're improving session over session.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="mt-1 text-2xl font-black text-blue-600">
                  {item.step}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
