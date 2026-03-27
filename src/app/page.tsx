import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { COACH, SERVICES } from "@/lib/placeholder";

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — What We Offer + Logo */}
      <section className="grid lg:grid-cols-2 lg:h-screen">
        {/* Logo side — top on mobile, right on desktop */}
        <div className="order-first flex items-center justify-center bg-slate-900 py-12 px-6 lg:order-last lg:py-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/TNS-logo.PNG"
            alt="The Next Step Basketball Training"
            className="w-64 sm:w-80 lg:w-[420px]"
          />
        </div>

        {/* What We Offer side — left on desktop */}
        <div className="flex flex-col justify-center bg-slate-800 px-8 py-12 lg:px-12 lg:py-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-400">
            What We Offer
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} compact />
            ))}
          </div>
        </div>
      </section>

      {/* 3 — About */}
      <section id="about" className="flex min-h-screen flex-col justify-center bg-slate-900 py-24 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/coach.jpg"
                alt={COACH.name}
                className="w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-400">
                About the Coach
              </p>
              <h2 className="mb-6 text-4xl font-extrabold">{COACH.name}</h2>

              <div className="space-y-4 leading-relaxed text-slate-300">
                <p>
                  Al Blount is a native to the Lehigh Valley. He attended Louis
                  E. Dieruff High School where he was a stand out basketball
                  player. Al received a scholarship from Tennessee State
                  University of which he attended from 1978 to 1982. He went on
                  to play semi pro basketball with Meadowlark Lemon and the
                  Bucketeers.
                </p>
                <p>
                  He then worked as a counselor at Kidspeace Corp and soon after
                  was the activities director in the Allentown School District.
                </p>
                <p>
                  Coach Blount has been a pillar of Lehigh Valley Basketball
                  always willing and able to give back his time to the game. He
                  has a personal training business &ldquo;The Next Step
                  (TNS)&rdquo; where he focuses on creating a foundation to the
                  youth by teaching the fundamentals of the game for many years.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Get in touch &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Contact CTA */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-slate-800 py-24 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-400">
            The Next Step
          </p>
          <h2 className="mb-4 text-4xl font-extrabold">
            Ready to elevate your game?
          </h2>
          <p className="mb-8 text-lg text-slate-400">
            Reach out to learn about training sessions and upcoming camps.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
