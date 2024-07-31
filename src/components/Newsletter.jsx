import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#070D44] flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-white text-3xl font-bold mb-4">Newsletter</h1>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500 sm:rounded-r-none"
          />
          <button
            type="submit"
            className="bg-[#13132f] text-white p-2 rounded-r-md sm:rounded-l-none sm:ml-0 hover:bg-[#0f1123]"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
