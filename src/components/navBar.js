import Button from "./button";
import NavItem from "./navItem";
import Logo from "./logo";
import {useNavigate } from 'react-router-dom';

export default function NavBar() {




  return (
    <div className="flex justify-between items-center h-16 bg-primary ">
      <div className="flex justify-start items-center pl-8 sm:pl-12 md:pl-16 lg:pl-24">
        <Logo />
      </div>
      <div className="flex justify-end items-center pr-8 sm:pr-12 md:pr-16 lg:pr-24">
        <NavItem key={1} to="/" text="Home" />
        <NavItem key={2} to="/about" text="About" />
        <NavItem key={3} to="/listings" text="Listings" />
        <Button variant="outlined" text="Contact" onClick={() => { }} />
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useMatch } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// // import logo from "../assets/images/mylogo.png";

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const matchContact = useMatch("/contact");
//     const matchAbout = useMatch("/about");
//     const matchHome = useMatch("/");

//     // Detect initial orientation
//     let isLandscape = window.matchMedia("(orientation: landscape)").matches;

//     // Listen for orientation changes
//     window.addEventListener("resize", function () {
//         isLandscape = window.matchMedia("(orientation: landscape)").matches;
//         // If the device is in landscape mode, close the overlay
//         if (isLandscape && isOpen) {
//           toggleNavbar();
//         }
//       },
//       false
//     );
//     const toggleNavbar = () => {
//       setIsOpen(!isOpen);
//     };

//     return (
//       <nav className="nav from-tertiary1 to-tertiary2 bg-gradient-to-b fixed top-0 w-full z-10  hover:shadow-primary transition duration-500 ease-in-out">
//         <div className="container mx-auto flex items-center justify-between my-2">
//           <div className="flex items-center ml-6 sm:ml-12 md:ml-16 lg:ml-24">
//             <NavLink to="/" className="">
//               <img src={logo} alt="logo" className="w-10 h-8 sm:w-14 sm:h-8 md:w-14 md:h-10 lg:w-16 lg:h-12" />
//             </NavLink>
//           </div>
//           {/* Bars icon for small screens */}
//           <div className=" flex md:hidden cursor-pointer z-20 mr-6 sm:mr-12 md:mr-16 outline-none" onClick={toggleNavbar} >
//             <FontAwesomeIcon  {...(isOpen ? { icon: faTimes } : { icon: faBars })} className={`bar-to-close text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${isOpen ? 'animate' : ''}`}/>
//           </div>

//           {/* Overlay menu for small screens */}
//           <div className={`lg:flex md:flex items-center sm:mx-6 md:mx-12 lg:mx-16 mx-6 ${isOpen
//                 ? "fixed z-0 top-0 left-0 right-0 bottom-0 mt-12 pt-auto h-screen bg-gradient-to-b from-tertiary1 to-tertiary2  bg-opacity-100 flex flex-col text-center text-xl"
//                 : "hidden"
//             }`}>
//             <NavLink to="/" className={` ${matchHome ? 'active-page' : 'text-white'} py-4 ${
//                 isOpen
//                   ? "text-2xl overlay-item mobile-nav-text"
//                   : "mx-4 text-with-shadow hover:text-secondary hover:font-bold transition duration-700 ease-in-out"
//               }`}
//               > Home
//             </NavLink>
//             <NavLink to="/about" className={`${matchAbout ? 'active-page' : 'text-white'} py-4 ${
//                 isOpen
//                   ? " overlay-item mobile-nav-text"
//                   : "mx-4 text-with-shadow hover:text-secondary hover:font-bold transition duration-700 ease-in-out"
//               }`}> About
//             </NavLink>
//             <NavLink to="/contact" className={`${matchContact ? 'active-page' : 'text-white'} py-4 ${
//                 isOpen
//                   ? "overlay-item mobile-nav-text"
//                   : "mx-4 text-with-shadow hover:text-secondary hover:font-bold transition duration-700 ease-in-out"
//               }`}
//               >Contact
//             </NavLink>
//           </div>
//         </div>
//       </nav>
//     );
//   }
