// import React, { useState } from "react";
// import { FaBell, FaUserCircle } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-400 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20">
//           <div className="flex-shrink-0 flex items-center">
          
//             <span className="text-black text-2xl ml-2 font-bold"> <span className="text-red-600">News</span>Alert</span>
//           </div>
//           <div className="hidden md:flex md:items-center">
//             <button className="text-black mr-4">
//               <FaBell size={24} />
//             </button>
//             <button className="text-black">
//               <FaUserCircle size={24} />
//             </button>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-inset"
//             >
//               {isOpen ? (
//                 <svg
//                   className="h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <button className="text-black block">
//             <FaBell size={24} />
//           </button>
//           <button className="text-black block mt-1">
//             <FaUserCircle size={24} />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { FaBell, FaUserCircle, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNotificationBar = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <nav className="bg-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-black text-2xl ml-2 font-bold">
              <span className="text-red-600">News</span>Alert
            </span>
          </div>
          <div className="hidden md:flex md:items-center">
            <button className="text-black mr-4" onClick={toggleNotificationBar}>
              <FaBell size={24} />
            </button>
            <button className="text-black">
              <FaUserCircle size={24} />
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button className="text-black block" onClick={toggleNotificationBar}>
            <FaBell size={24} />
          </button>
          <button className="text-black block mt-1">
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>

      {/* Notification Bar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isNotificationOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Notifications</h2>
            <button
              onClick={toggleNotificationBar}
              className="text-black"
              aria-label="Close notifications"
            >
              <FaTimes size={20} />
            </button>
          </div>
          <p>No new notifications</p>
          {/* Add your notification content here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
