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
          <h2 className="mb-8 text-4xl font-extrabold text-white leading-tight">
            Programs Built to<br />Elevate Your Game
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} compact />
            ))}
          </div>
          <Link
            href="/training"
            className="mt-8 self-start text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Explore our programs &rarr;
          </Link>
        </div>
      </section>

      {/* 3 — About */}
      <section id="about" className="flex min-h-screen flex-col justify-center bg-slate-900 py-24 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">

          {/* Mobile-only heading — sits above the photo */}
          <div className="mb-6 lg:hidden">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-400">
              About the Coach
            </p>
            <h2 className="text-4xl font-extrabold">{COACH.name}</h2>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl mx-auto w-2/3 sm:w-1/2 lg:w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/coach-al.jpeg"
                alt={COACH.name}
                className="w-full h-auto"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-400 hidden lg:block">
                About the Coach
              </p>
              <h2 className="mb-6 text-4xl font-extrabold hidden lg:block">{COACH.name}</h2>

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

              <p className="mt-6 leading-relaxed text-slate-300">
                The Next Step Basketball Program is a great resource for all basketball programs from youth through college teams preparing for the upcoming season. TNS holds its own sessions on the weekends and looks to assist in your team&rsquo;s skill development as well as basketball IQ.
              </p>

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

      {/* 4 — Testimonials */}
      <section className="flex min-h-screen flex-col justify-center bg-slate-800 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-400">
            Testimonials
          </p>
          <h2 className="mb-16 text-4xl font-extrabold">What Our Families Say</h2>
          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-2xl bg-slate-900 p-8">
              <p className="leading-relaxed text-slate-300">
                Coach Al has played a huge role in my son&rsquo;s growth as a basketball player and as a young person. Through his patience, encouragement, and clear instruction, Xavier has gained confidence in his abilities and developed stronger fundamentals and game awareness. Coach Al creates a positive, motivating environment that allows kids to believe in themselves, work hard, and enjoy the game. We are incredibly grateful for the impact he&rsquo;s had on my son&rsquo;s confidence and love for basketball.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <p className="leading-relaxed text-slate-300">
                Coach Al&rsquo;s approach has truly transformed my son&rsquo;s game. Through disciplined, fundamentals-based drills, Derek has become a more confident shooter, a stronger ball handler, and a more complete all-around player. The time, consistency, and attention to detail Coach Al brings to every session has made a lasting impact, not just on my son&rsquo;s skills, but on his work ethic and mindset as a player.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5 — Contact CTA */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-slate-900 py-24 text-center text-white">
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
