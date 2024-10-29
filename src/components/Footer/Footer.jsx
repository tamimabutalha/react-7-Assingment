import logo from "../../assets/logo-footer.png";

export default function Footer() {
  return (
    <div className="bg-[#040D11] text-white p-10 mt-56">
      <div className="container mx-auto">
        
        <div className="bg-gradient-to-r from-blue-200 to-orange-200 rounded-lg p-8 mb-8 text-center -mt-48 py-20">
          <h2 className="text-[32px] text-black font-bold">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-700  text-[20px] mb-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-1/3 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button className="px-5 py-3 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-r-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="text-center my-8">
          <img src={logo} alt="Cricket Logo" className="mx-auto w-20" />
        </div>

       
        <footer className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          <div className="md:w-1/4">
            <h6 className=" font-semibold mb-4">About Us</h6>
            <p className="text-gray-400 text-xs">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          
          <div className="md:w-1/4">
            <h6 className=" font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
          <div className="md:w-1/4 ">
            <h6 className=" font-semibold mb-4">Subscribe</h6>
            <p className="text-gray-400 mb-4 text-xs">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded-l-lg border border-gray-300 text-xs focus:outline-none"
              />
              <button className="px-4 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-r-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </footer>

        
        <p className="text-center text-gray-500 mt-8 text-xs">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
