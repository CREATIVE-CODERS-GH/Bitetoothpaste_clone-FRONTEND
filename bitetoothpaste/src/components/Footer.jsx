const Footer = () => {
    return (
      <footer className="bg-black text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Stay in the Know Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">STAY IN THE KNOW</h3>
            <p className="text-2xl font-light mb-4">Sign up for 10% off your first order.</p>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-transparent border-b border-white pb-2 mb-4"
            />
            <button className="bg-white text-black px-4 py-2">Subscribe</button>
            <div className="flex space-x-4 mt-8">
              {/* Placeholder for certification icons */}
              <div className="w-10 h-10 bg-white rounded-full"></div>
              <div className="w-10 h-10 bg-white rounded-full"></div>
              <div className="w-10 h-10 bg-white rounded-full"></div>
              <div className="w-10 h-10 bg-white rounded-full"></div>
            </div>
          </div>
  
          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>All Products</li>
              <li>Oral Care</li>
              <li>Body</li>
              <li>Sets</li>
            </ul>
          </div>
  
          {/* Learn Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">LEARN</h3>
            <ul className="space-y-2">
              <li>Ingredients</li>
              <li>Sustainability</li>
              <li>About Us</li>
              <li>Store Locator</li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>Account ↗</li>
              <li>Wholesale ↗</li>
              <li>FAQs</li>
              <li>Sitemap</li>
            </ul>
          </div>
  
          {/* Follow Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">FOLLOW</h3>
            <ul className="space-y-2">
              <li>Instagram ↗</li>
              <li>Twitter ↗</li>
              <li>TikTok ↗</li>
              <li>Facebook ↗</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div>© 2024 Bite. All Rights Reserved.</div>
          <div className="flex space-x-4">
            <span>Privacy policy</span>
            <span>Terms of service</span>
            <span>Shipping policy</span>
            <span>hello@bitetoothpastebits.com</span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;