import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-black py-8">
      <div className="container mx-auto lg:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="text-sm">
              We are a team dedicated to providing the best service.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-white transition">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.49 0-9.96 4.47-9.96 9.96 0 5.49 4.47 9.96 9.96 9.96s9.96-4.47 9.96-9.96c0-5.49-4.47-9.96-9.96-9.96zm-.4 18.22c-2.74-.14-5.06-1.13-6.96-2.71.49.08.99.13 1.5.13 2.27 0 4.35-.77 6-2.07-2.12-.04-3.9-1.45-4.52-3.38.3.05.61.08.93.08.44 0 .87-.06 1.28-.17-2.2-.44-3.85-2.39-3.85-4.72v-.06c.64.35 1.37.56 2.15.59-1.28-.86-2.11-2.33-2.11-3.99 0-.88.24-1.71.66-2.43 2.4 2.94 6.02 4.87 10.09 5.07-.08-.35-.12-.71-.12-1.08 0-2.6 2.11-4.71 4.71-4.71 1.36 0 2.6.57 3.47 1.47 1.08-.21 2.09-.6 3.01-1.14-.35 1.09-1.08 2.01-2.03 2.58.95-.11 1.86-.37 2.71-.75-.62.94-1.41 1.76-2.32 2.41z" />
              </svg>
            </a>
            <a href="#" className="text-gray-800 hover:text-white transition">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-4.42 0-8 3.58-8 8v8c0 4.42 3.58 8 8 8h8c4.42 0 8-3.58 8-8v-8c0-4.42-3.58-8-8-8h-8zm0 2h8c3.31 0 6 2.69 6 6v8c0 3.31-2.69 6-6 6h-8c-3.31 0-6-2.69-6-6v-8c0-3.31 2.69-6 6-6zm-1 8h-2v7h2v-7zm-1-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 1h-2v7h2v-7zm-1-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-800 mt-4">
          &copy; 2024 Abhishek Roy . All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
