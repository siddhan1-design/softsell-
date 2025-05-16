<button
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
>
  Get a Quote
</button>
