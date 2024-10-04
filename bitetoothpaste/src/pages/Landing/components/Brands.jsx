// 

import { cosmopolitan, elle, forbes, goop, oprah, people, vogue, womenshealth } from "../../../assets";

const Brands = () => {
  const logos = [
    { name: "Forbes", src: forbes, alt: "Forbes Logo" },
    { name: "Oprah", src: oprah, alt: "The Oprah Magazine Logo" },
    { name: "Cosmopolitan", src: cosmopolitan, alt: "Cosmopolitan Logo" },
    { name: "Women's Health", src: womenshealth, alt: "Women's Health Logo" },
    { name: "Vogue", src: vogue, alt: "Vogue Logo" },
    { name: "Goop", src: goop, alt: "Goop Logo" },
    { name: "Elle", src: elle, alt: "Elle Logo" },
    { name: "People", src: people, alt: "People Logo" },
  ];

  return (
    <section className="w-full py-4 border-t border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 overflow-x-auto whitespace-nowrap pb-2">
          <span className="text-xs font-medium text-gray-500 uppercase shrink-0">As seen in</span>
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.alt}
              className="h-5 object-contain grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;