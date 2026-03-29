import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description: "Basketball training programs for players at every level.",
};

const PROGRAMS = [
  {
    id: "individual",
    label: "Individual Training",
    heading: "One-on-One Training",
    description:
      "Personalized sessions built around your specific needs — ball handling, shooting mechanics, footwork, and basketball IQ.",
    photo: "/tns-6.png",
    photoAlt: "Individual basketball training",
  },
  {
    id: "group",
    label: "Group Sessions",
    heading: "Group Sessions",
    description:
      "Small-group workouts that combine skill development with team concepts. Players push each other and grow together.",
    photo: "/tns-2.jpg",
    photoAlt: "Group basketball session",
  },
  {
    id: "camps",
    label: "Training Camps",
    heading: "Training Camps",
    description:
      "Multi-day camps for youth players of all ages. Real coaching and a competitive environment designed to accelerate development in a short amount of time.",
    photo: "/tns-10.jpg",
    photoAlt: "Basketball training camp",
  },
];

export default function TrainingPage() {
  return (
    <>
      {PROGRAMS.map((program, i) => (
        <section key={program.id} className={`py-20 text-white ${i % 2 === 0 ? "bg-slate-800" : "bg-slate-900"}`}>
          <div className={`mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

            {/* Text */}
            <div className="flex-1">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-pink-400">
                {program.label}
              </p>
              <h2 className="mb-6 text-4xl font-extrabold leading-tight">
                {program.heading}
              </h2>
              <p className="text-lg leading-relaxed text-slate-400">
                {program.description}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                Get in Touch
              </Link>
            </div>

            {/* Photo */}
            <div className="w-full lg:w-[480px] shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={program.photo}
                alt={program.photoAlt}
                className="w-full h-auto rounded-2xl"
              />
            </div>

          </div>
        </section>
      ))}
    </>
  );
}
