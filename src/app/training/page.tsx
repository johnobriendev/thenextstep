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
      "Personalized sessions built around your specific needs — ball handling, shooting mechanics, footwork, and basketball IQ. Every rep has a purpose.",
    photo: "/tns-1.jpg",
    photoAlt: "Individual basketball training",
  },
  {
    id: "group",
    label: "Group Sessions",
    heading: "Group Sessions",
    description:
      "Small-group workouts that combine skill development with competitive reps and team concepts. Players push each other and grow together.",
    photo: "/tns-2.jpg",
    photoAlt: "Group basketball session",
  },
  {
    id: "camps",
    label: "Training Camps",
    heading: "Training Camps",
    description:
      "Multi-day camps for youth players of all ages. High reps, real coaching, and a competitive environment designed to accelerate development in a short amount of time.",
    photo: "/tns-3.jpg",
    photoAlt: "Basketball training camp",
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* Program sections */}
      {PROGRAMS.map((program, i) => {
        const imageRight = i % 2 === 0;
        return (
          <section key={program.id} className="h-screen text-white">
            <div className={`grid h-full lg:grid-cols-2 ${imageRight ? "" : "lg:[&>*:first-child]:order-last"}`}>

              {/* Text */}
              <div className="flex flex-col justify-center bg-slate-800 px-8 py-16 lg:px-16">
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
                  className="mt-8 self-start rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={program.photo}
                alt={program.photoAlt}
                className="h-full w-full object-cover"
              />

            </div>
          </section>
        );
      })}
    </>
  );
}
