
import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919890061374";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello Atharva Enterprises, I would like to know more about your electrical engineering services."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-all duration-200 hover:scale-105 hover:shadow-[0_7px_22px_rgba(0,0,0,0.22)] sm:bottom-6 sm:right-8 sm:h-12 sm:w-12"
    >
      <img
        src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
        alt="WhatsApp"
        className="h-5 w-5 sm:h-7 sm:w-7"
      />
    </a>
  );
};

export default WhatsAppButton;
