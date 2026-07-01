export const contact = {
  phone: "+8801717428220",
  displayPhone: "+880 1717-428220",
  email: "fitandfine.uttara@gmail.com",
  address:
    "House 68, Ist floor, Road 03, Gausul Azom Road, Sector 14, Uttara, Dhaka 1230",
  facebook: "https://www.facebook.com/fitnfine",
};

export const whatsappMessage = encodeURIComponent(
  "Hello FIT & FINE Physiotherapy Centre, I would like to know more about your physiotherapy services.",
);

export const whatsappLink = `https://wa.me/${contact.phone.replace(/[^\d]/g, "")}?text=${whatsappMessage}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

export const services = [
  {
    title: "Pain management and recovery support",
    image: "/services/1.jpeg",
  },
  {
    title: "Sports injury rehabilitation",
    image: "/services/2.jpeg",
  },
  {
    title: "Post-surgical physiotherapy",
    image: "/services/3.jpeg",
  },
  {
    title: "Neurological rehabilitation",
    image: "/services/4.jpeg",
  },
  {
    title: "Mobility and strengthening programs",
    image: "/services/5.jpeg",
  },
  {
    title: "Manual therapy and guided exercise",
    image: "/services/6.jpeg",
  },
];

export const highlights = [
  "Personalized care plans",
  "Convenient Uttara location",
];

export const processSteps = [
  "Tap the WhatsApp button and send a quick message.",
  "Tell us about your concern, pain area, or recovery goal.",
  "Get a direct response with the next recommended step.",
];

export const faqs = [
  {
    question: "What should I send on WhatsApp?",
    answer:
      "Share your concern, the body area involved, and whether you want treatment, follow-up information, or directions.",
  },
  {
    question: "Can I contact you by email too?",
    answer:
      "Yes. You can email fitandfine.uttara@gmail.com if that is easier than WhatsApp.",
  },
  {
    question: "Where is the clinic located?",
    answer:
      "House 68, Ist floor, Road 03, Gausul Azom Road, Sector 14, Uttara, Dhaka 1230.",
  },
];

export const patientReviews = [
  {
    id: 1,
    name: "Sara Mehjabin",
    rating: 5,
    text: "After my car accident, I thought I'd never walk normally again. The team here not only got me walking, but running! The personalized care was incredible.",
  },
  {
    id: 2,
    name: "Azizur R.",
    rating: 5,
    text: "Professional, clean, and effective. My back pain that plagued me for years was finally resolved in just a few sessions.",
  },
  {
    id: 3,
    name: "Anita Kar",
    rating: 4,
    text: "The stroke rehabilitation program was phenomenal. The therapists are patient and truly care about your progress.",
  },
  {
    id: 4,
    name: "Rezaul Islam",
    rating: 5,
    text: "Best physiotherapy center in the city. Highly recommend to any athlete dealing with injuries.",
  },
];
  