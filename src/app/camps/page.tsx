import type { Metadata } from "next";
import Link from "next/link";
import { CAMPS } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "Camps",
  description:
    "Summer basketball camps for youth players ages 7–18. Multiple sessions and skill levels available.",
};

export default function CampsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-400">
            Summer Camps
          </p>
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight">
            An Elite Camp Experience
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Multiple sessions for different age groups and skill levels. Small
            rosters, high reps, real coaching — not babysitting.
          </p>
        </div>
      </section>

      {/* Camp cards */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-3xl font-extrabold text-slate-900">
            2025 Sessions {/* TODO: update year dynamically or via placeholder */}
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {CAMPS.map((camp) => (
              <div
                key={camp.id}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {camp.ages}
                  </span>
                  {camp.spotsLeft <= 5 && (
                    <span className="text-xs font-semibold text-pink-600">
                      Only {camp.spotsLeft} spots left!
                    </span>
                  )}
                </div>
                <h3 className="mb-1 text-xl font-bold text-slate-900">
                  {camp.name}
                </h3>
                <p className="mb-1 text-sm font-medium text-blue-600">
                  {camp.dates}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {camp.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-2xl font-extrabold text-slate-900">
                    {camp.price}
                  </span>
                  <Link
                    href="/contact"
                    className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / info strip */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-3xl font-extrabold text-slate-900">
            Camp Details
          </h2>
          {/* TODO: replace with real FAQs from client */}
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                q: "What should players bring?",
                a: "Water bottle, basketball shoes, and athletic wear. A basketball is recommended but not required.",
              },
              {
                q: "Are meals provided?",
                a: "Snacks are provided during breaks. Players should bring a packed lunch for full-day sessions.",
              },
              {
                q: "What is the refund policy?",
                a: "Full refunds available up to 14 days before camp start. 50% refund within 14 days.", // TODO: confirm with client
              },
              {
                q: "Where are camps held?",
                a: "All camps are held at [Facility Name]. Full address provided upon registration.", // TODO: real location
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h3 className="mb-2 font-bold text-slate-900">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
