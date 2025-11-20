import React, { useState, useEffect } from "react";
import {
  Star,
  Train,
  ShoppingBag,
  Car,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// Helper: build a URL from the /public folder (works in dev AND on GitHub Pages)
const withBase = (p) => `/${p.replace(/^\//, "")}`;

// Reusable grid wrapper (use wherever you want the grid behind the content)
const GridBackground = ({ children }) => (
  <div className="relative">
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
    <div className="relative z-10">{children}</div>
  </div>
);

const Home = () => {
  // ----- Hero image rotation -----
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [withBase("bedroom.jpg"), withBase("livingroom.jpg")];

  // ----- Party images carousel -----
  const [currentPartyIndex, setCurrentPartyIndex] = useState(0);
  const partyImages = [
    withBase("images1.jpeg"),
    withBase("images2.jpeg"),
    withBase("images3.jpeg"),
    withBase("images4.jpeg"),
    withBase("images5.jpeg"),
  ];

  // ----- Reviews carousel -----
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      review:
        "Excellent facilities and very clean rooms. The location is perfect for college students with easy metro access.",
    },
    {
      name: "Anjali Gupta",
      rating: 5,
      review:
        "Amazing place to stay! The staff is very helpful and the rooms are well-maintained. Highly recommended!",
    },
    {
      name: "Neha Singh",
      rating: 4,
      review:
        "Great PG with all necessary amenities. Close to metro station and colleges. Very safe for girls.",
    },
    {
      name: "Riya Patel",
      rating: 5,
      review:
        "Best PG experience ever! Clean, safe, and convenient location. The community events are really fun too.",
    },
    {
      name: "Kavya Reddy",
      rating: 4,
      review:
        "Wonderful place to stay during college years. Good connectivity and responsive management.",
    },
  ];

  // ----- Timers -----
  useEffect(() => {
    const id = setInterval(
      () => setCurrentImageIndex((p) => (p + 1) % heroImages.length),
      6000
    );
    return () => clearInterval(id);
  }, [heroImages.length]);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentPartyIndex((p) => (p + 1) % partyImages.length),
      4000
    );
    return () => clearInterval(id);
  }, [partyImages.length]);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentReviewIndex((p) => (p + 1) % reviews.length),
      5000
    );
    return () => clearInterval(id);
  }, [reviews.length]);

  // ----- Handlers -----
  const nextPartyImage = () =>
    setCurrentPartyIndex((p) => (p + 1) % partyImages.length);
  const prevPartyImage = () =>
    setCurrentPartyIndex(
      (p) => (p - 1 + partyImages.length) % partyImages.length
    );

  const nextReview = () =>
    setCurrentReviewIndex((p) => (p + 1) % reviews.length);
  const prevReview = () =>
    setCurrentReviewIndex((p) => (p - 1 + reviews.length) % reviews.length);

  // ----- UI helpers -----
  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border border-purple-100 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left bg-white hover:bg-purple-50 transition-colors duration-200 flex justify-between items-center"
      >
        <span className="font-medium text-gray-800 font-inter">{question}</span>
        <ChevronRight
          className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-purple-50 border-t border-purple-100">
          <p className="text-gray-700 font-inter">{answer}</p>
        </div>
      )}
    </div>
  );

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqData = [
    {
      question: "Is boys PG available?",
      answer: "No, it's a girls PG only but the rooms are co-live.",
    },
    {
      question:
        "Are utilities such as electricity, water, and internet included in the rent?",
      answer:
        "No, they are separate. Every room/PG has their own meters by which the cost is calculated.",
    },
    {
      question: "Can I view the accommodations before booking?",
      answer: "Yes, absolutely! Just have to inform us beforehand.",
    },
    {
      question: "Is there a security deposit required?",
      answer:
        "Yes, but it is returned at the end of the terms if there are no violations of the terms of service.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* ===== Hero Section ===== */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-inter tracking-tight">
              MVA Rooms & PGs
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-1">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold text-white">4.7</span>
              <span className="text-lg text-gray-200">Google Rating</span>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Choose Your Stay ===== */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-inter">
          Choose Your Stay
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Rooms for Co-living */}
          <div className="bg-purple-600 text-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={withBase("smallrooms.jpg")}
              alt="Rooms for Co-living"
              className="w-full h-72 object-cover"
            />
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Rooms for Co-living</h3>
              <Link
                to="/rooms"
                className="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-purple-100 transition"
              >
                Explore Rooms
              </Link>
            </div>
          </div>

          {/* PG for Girls */}
          <div className="bg-purple-600 text-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={withBase("smallpg.jpg")}
              alt="PG for Girls"
              className="w-full h-72 object-cover"
            />
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">PG for Girls</h3>
              <Link
                to="/pg"
                className="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-purple-100 transition"
              >
                Explore PG
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Accessibility Section ===== */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-inter">
          Prime Location & Accessibility
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 font-inter">
              North Campus Colleges
            </h3>
            <p className="text-gray-600 font-arial">
              10-15 minutes walking distance from major colleges
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 font-inter">
              Rickshaw Access
            </h3>
            <p className="text-gray-600 font-arial">
              Readily available rickshaws within 5 minutes
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Train className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 font-inter">
              Metro Connectivity
            </h3>
            <p className="text-gray-600 font-arial">
              Vishwavidyalaya Metro - 7 mins by rickshaw
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 font-inter">
              Local Amenities
            </h3>
            <p className="text-gray-600 font-arial">
              Grocery shops nearby, main road location
            </p>
          </div>
        </div>
      </section>

      {/* ===== Parties Section (with blurred background) ===== */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-inter">
            Life at MVA - Events & Celebrations
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div className="relative h-[420px] md:h-[500px]">
                {partyImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentPartyIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* Blurred background fill */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover scale-110 blur-md opacity-70"
                      />
                    </div>

                    {/* Main crisp image on top */}
                    <div className="relative flex items-center justify-center h-full">
                      <img
                        src={image}
                        alt={`Event ${index + 1}`}
                        className="max-h-[90%] max-w-[90%] object-contain rounded-2xl shadow-xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevPartyImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600" />
            </button>

            <button
              onClick={nextPartyImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-purple-600" />
            </button>

            <div className="flex justify-center mt-6 gap-2">
              {partyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPartyIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentPartyIndex
                      ? "bg-purple-600 scale-125"
                      : "bg-purple-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Customer Reviews Section ===== */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-inter">
            What Our Customers Say
          </h2>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[200px]">
              <div className="text-center">
                <StarRating rating={reviews[currentReviewIndex].rating} />
                <p className="text-lg text-gray-700 my-6 font-arial leading-relaxed">
                  "{reviews[currentReviewIndex].review}"
                </p>
                <h4 className="text-xl font-semibold text-purple-600 font-inter">
                  - {reviews[currentReviewIndex].name}
                </h4>
              </div>
            </div>

            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-purple-100 hover:bg-purple-200 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600" />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-purple-100 hover:bg-purple-200 rounded-full p-3 shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-purple-600" />
            </button>

            <div className="flex justify-center mt-8 gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentReviewIndex
                      ? "bg-purple-600 scale-125"
                      : "bg-purple-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section (WITH CONSISTENT GRID) ===== */}
      <GridBackground>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-inter">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>
      </GridBackground>

      {/* ===== Final Contact Section (WITH CONSISTENT GRID) ===== */}
      <GridBackground>
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 font-inter">
              Ready to Make MVA Your Home?
            </h2>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Us Now
            </Link>
          </div>
        </section>
      </GridBackground>
    </div>
  );
};

export default Home;
