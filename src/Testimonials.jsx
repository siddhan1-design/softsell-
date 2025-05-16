function Testimonials() {
    return (
      <section id="testimonials" className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="italic mb-4">
              "SoftSell made selling our unused licenses fast and easy. Highly recommended!"
            </p>
            <h3 className="font-semibold">Jane Doe</h3>
            <p className="text-sm text-gray-500">IT Manager, TechCorp</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <p className="italic mb-4">
              "Excellent service and quick payments. SoftSell is my go-to for license resale."
            </p>
            <h3 className="font-semibold">John Smith</h3>
            <p className="text-sm text-gray-500">Operations Head, SoftSolutions</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
  