import React from "react";

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

export default MapEmbed;