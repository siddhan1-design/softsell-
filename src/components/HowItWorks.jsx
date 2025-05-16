function HowItWorks() {
    return (
      <section id="how-it-works" className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">📤</div>
            <h3 className="text-xl font-semibold">Upload License</h3>
            <p className="text-gray-600 mt-2">Easily upload your unused software licenses securely.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold">Get Valuation</h3>
            <p className="text-gray-600 mt-2">Receive a fair market price for your licenses instantly.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-4">🏦</div>
            <h3 className="text-xl font-semibold">Get Paid</h3>
            <p className="text-gray-600 mt-2">Get paid quickly via your preferred payment method.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default HowItWorks;
  