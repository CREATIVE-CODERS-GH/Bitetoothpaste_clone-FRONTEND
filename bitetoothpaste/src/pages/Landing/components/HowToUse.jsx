

const HowToUse = () => {
  const steps = [
    {
      title: "Step 1",
      description: "Take a single toothpaste bit.",
      image: "/path/to/step1-image.jpg"
    },
    {
      title: "Step 2",
      description: "Chew the bit to form a paste.",
      image: "/path/to/step2-image.jpg"
    },
    {
      title: "Step 3",
      description: "Brush with a wet toothbrush as usual.",
      image: "/path/to/step3-image.jpg"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How To Use</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={step.image} alt={step.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-center text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;