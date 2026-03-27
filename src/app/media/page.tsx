import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media",
  description: "Photos and videos from The Next Step Basketball Training.",
};

export default function MediaPage() {
  return (
    <section className="flex min-h-screen flex-col bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-400">
          Gallery
        </p>
        <h1 className="mb-4 text-4xl font-extrabold leading-tight">Media</h1>
        <p className="text-slate-400">
          Photos and videos coming soon.
        </p>
      </div>
    </section>
  );
}
