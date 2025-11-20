export default function Contactus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center">
      <div className="text-center max-w-2xl p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-purple-700 mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-700 mb-8">
          Call, WhatsApp, or Email us for bookings, visits, or questions.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="tel:+91 9810111617"
            className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            Call: +91 9810118759
          </a>
          <a
            href="https://wa.me/91 9810111617"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
          >
            WhatsApp
          </a>
          <a
            href="mailto:mvarooms@gmail.com"
            className="px-6 py-3 rounded-full bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 transition"
          >
            Email: mvarooms@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
