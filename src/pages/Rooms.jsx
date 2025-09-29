import React, { useEffect, useState } from "react";
import {
  BedDouble,
  Bed,
  Shield,
  Wifi,
  Sparkles,
  Shirt,
  BookOpen,
  Wind,
  Pill,
  Camera,
  Snowflake,
} from "lucide-react";

// Helper: build a URL from the /public folder (works in dev AND on GitHub Pages)
const withBase = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;

const MapEmbed = () => (
  <div className="w-full h-[420px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3861581594783!2d77.20257017628452!3d28.678093075639886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9019069a8d%3A0x57ea37ff2e1352f9!2sMVA%20ROOMS%20%26%20PGS!5e0!3m2!1sen!2sin!4v1758987255064!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="MVA Rooms & PGs on Google Maps"
    ></iframe>
  </div>
);

export default function Rooms() {
  // ------- simple mount animation for gallery -------
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const gallery = [
    withBase("Rooms1.jpg"),
    withBase("Rooms2.jpg"),
    withBase("Rooms3.jpg"),
    withBase("Rooms4.jpg"),
    withBase("Rooms5.jpg"),
    withBase("Rooms6.jpg"),
  ];

  // ------- amenities with "see more" toggle -------
  const baseAmenities = [
    { icon: <Bed className="w-5 h-5" />, label: "Single & Double Bed" },
    { icon: <Wifi className="w-5 h-5" />, label: "Wi-Fi" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Housekeeping" },
    { icon: <Camera className="w-5 h-5" />, label: "CCTV" },
  ];

  const moreAmenities = [
    { icon: <Snowflake className="w-5 h-5" />, label: "Common Fridge" },
    { icon: <Shirt className="w-5 h-5" />, label: "Washing Machine" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Study Desk" },
    { icon: <Wind className="w-5 h-5" />, label: "Air-Conditioner" },
    { icon: <Pill className="w-5 h-5" />, label: "Medication Help" },
    { icon: <Shield className="w-5 h-5" />, label: "Secure Premises" },
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Title */}
      <header className="max-w-6xl mx-auto px-4 pt-16 pb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 font-inter">
          MVA Rooms
        </h1>
      </header>

      {/* Gallery 3x2 with subtle pop */}
      <section className="max-w-6xl mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((src, i) => (
            <div
              key={src}
              className={`rounded-2xl overflow-hidden shadow-md bg-white transform transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <img
                src={src}
                alt={`Room ${i + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-inter">
          Amenities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...baseAmenities, ...(showMore ? moreAmenities : [])].map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl bg-white shadow p-4"
            >
              <div className="text-purple-600">{a.icon}</div>
              <span className="font-medium text-gray-800 font-inter">{a.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowMore((s) => !s)}
            className="rounded-full px-5 py-2 border border-purple-300 text-purple-700 hover:bg-purple-600 hover:text-white transition font-medium"
          >
            {showMore ? "See less" : "See more"}
          </button>
        </div>
      </section>

      {/* Pricing (Rooms: one floating card) */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-inter">
          Pricing
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="relative rounded-3xl bg-white shadow-xl overflow-hidden">
              <img
                src={withBase("RoomIcon.jpg")}
                alt="Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <p className="text-xl font-semibold text-gray-900 font-inter">
                  ₹30,000<span className="text-gray-500 text-base align-top">*</span>
                </p>
                <p className="text-sm text-gray-500">per month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full">
        <MapEmbed />
      </section>

      <div className="h-10" />
    </div>
  );
}
