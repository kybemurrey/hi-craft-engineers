import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "254721937014";
  const message = encodeURIComponent("Hello Hi Craft Engineering! I'd like to inquire about your services.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default WhatsAppButton;
