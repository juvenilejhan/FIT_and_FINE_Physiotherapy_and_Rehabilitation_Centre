export const contact = {
  phone: "+8801717428220",
  displayPhone: "+880 1717-428220",
  email: "fitandfine.uttara@gmail.com",
  address:
    "House 68, Ist floor, Road 03, Gausul Azom Road, Sector 14, Uttara, Dhaka 1230",
  facebook: "https://www.facebook.com/fitnfine",
};

export const whatsappMessage = encodeURIComponent(
  "আসসালামু আলাইকুম। আমি ফিজিওথেরাপি নেওয়ার জন্য আপনাদের সেন্টারে আসতে চাই। সিরিয়াল বা অ্যাপয়েন্টমেন্ট কীভাবে পাবো?",
);

export const whatsappLink = `https://wa.me/${contact.phone.replace(/[^\d]/g, "")}?text=${whatsappMessage}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

export const services = [
  { title: "ব্যথার চিকিৎসা ও পুনর্বাসন", image: "/services/1.jpeg" },
  { title: "স্পোর্টস ইনজুরি পুনর্বাসন", image: "/services/2.jpeg" },
  { title: "অস্ত্রোপচার পরবর্তী ফিজিওথেরাপি", image: "/services/3.jpeg" },
  { title: "নিউরোলজিক্যাল পুনর্বাসন", image: "/services/4.jpeg" },
  { title: "শারীরিক গতিশীলতা ও শক্তি বৃদ্ধি", image: "/services/5.jpeg" },
  {
    title: "ম্যানুয়াল থেরাপি ও সুনির্দিষ্ট ব্যায়াম",
    image: "/services/6.jpeg",
  },
];

export const highlights = [
  "Personalized care plans",
  "Convenient Uttara location",
];

export const processSteps = [
  "হোয়াটসঅ্যাপ বাটনে ট্যাপ করে আমাদের একটি ছোট মেসেজ করুন।",
  "আপনার সমস্যা, ব্যথার স্থান বা চিকিৎসার লক্ষ্য আমাদের বিস্তারিত জানান।",
  "আমাদের বিশেষজ্ঞরা আপনাকে পরবর্তী প্রয়োজনীয় পদক্ষেপ ও গাইডলাইন জানিয়ে দেবেন।",
];

export const faqs = [
  {
    question: "হোয়াটসঅ্যাপে কী ধরনের তথ্য দেব?",
    answer:
      "আপনার সমস্যাটি কী, শরীরের কোন অংশে ব্যথা বা অসুবিধা এবং আপনি কি চিকিৎসা নিতে চান, নাকি শুধু পরামর্শ নিতে চান—এই বিষয়গুলো জানালেই হবে।",
  },
  {
    question: "ইমেইলের মাধ্যমেও কি যোগাযোগ করতে পারব?",
    answer:
      "অবশ্যই। হোয়াটসঅ্যাপে মেসেজ করতে অসুবিধা হলে আপনি সরাসরি আমাদের ইমেইল করতে পারেন: fitandfine.uttara@gmail.com",
  },
  {
    question: "আপনাদের চিকিৎসা কেন্দ্রটি কোথায়?",
    answer:
      "বাড়ি ৬৮, ১ম তলা, রোড ০৩, গাউসুল আযম রোড, সেক্টর ১৪, উত্তরা, ঢাকা ১২৩০।",
  },
];

export const patientReviews = [
  {
    id: 1,
    name: "সারা মেহজাবিন",
    rating: 5,
    text: "সড়ক দুর্ঘটনার পর ভেবেছিলাম আর স্বাভাবিকভাবে হাঁটতে পারব না। কিন্তু এখানকার টিম আমাকে শুধু হাঁটতেই নয়, দৌড়াতে পারার ক্ষমতা ফিরিয়ে দিয়েছে! আমার জন্য যে ব্যক্তিগত যত্নটুকু নেওয়া হয়েছে, তা সত্যিই প্রশংসনীয়।",
  },
  {
    id: 2,
    name: "আজিজুল হক",
    rating: 5,
    text: "চমৎকার পেশাদারিত্ব, পরিচ্ছন্ন পরিবেশ এবং সত্যিই কার্যকরী চিকিৎসা। বছরের পর বছর ধরে আমাকে কষ্ট দেওয়া পিঠের ব্যথা মাত্র কয়েকটি সেশনেই দূর করে দিয়েছে তারা।",
  },
  {
    id: 3,
    name: "অনিতা কর",
    rating: 4,
    text: "স্ট্রোক পরবর্তী পুনর্বাসন প্রোগ্রামটি ছিল অসাধারণ। থেরাপিস্টরা অত্যন্ত ধৈর্যশীল এবং রোগীর উন্নতি নিয়ে সত্যিই আন্তরিক।",
  },
  {
    id: 4,
    name: "রিয়াজুউল ইসলাম",
    rating: 5,
    text: "শহরের অন্যতম সেরা ফিজিওথেরাপি সেন্টার। ইনজুরির কারণে যেকোনো খেলোয়াড়কে আমি স্বচ্ছন্দেই এখানে পরামর্শ দেব।",
  },
];
