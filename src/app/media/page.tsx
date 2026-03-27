import type { Metadata } from "next";
import MediaGallery from "@/components/MediaGallery";

export const metadata: Metadata = {
  title: "Media",
  description: "Photos and videos from The Next Step Basketball Training.",
};

export default function MediaPage() {
  return (
    <section className="min-h-screen bg-slate-900 py-24 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <MediaGallery />
      </div>
    </section>
  );
}
