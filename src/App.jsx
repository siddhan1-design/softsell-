import React from "react";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-blue-600 text-white p-8 text-center">
  <h1 className="text-5xl font-bold mb-4">Resell Your Software Licenses Easily</h1>
  <p className="text-xl mb-6">At SoftSell, we help you convert unused software licenses into cash quickly and securely.</p>
  <button
    onClick={() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100 transition"
  >
    Get a Quote
  </button>
</section>

      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
