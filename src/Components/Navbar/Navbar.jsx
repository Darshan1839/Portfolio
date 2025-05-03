import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import TopBar from "./TopBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
    
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
        {/* Logo - Left */}
        <div className="text-2xl font-bold "><Link to="/">PortFolio</Link></div>

        {/* Search Bar & Button - Center */}
        <div className="hidden md:flex items-center space-x-2 w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded bg-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-1 bg-blue-500 rounded hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* Navigation - Right */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>

          {/* Projects Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-blue-400">
              Projects ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-gray-800 rounded shadow-md w-40">
                <a href="https://jobportal-1-io1y.onrender.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-600 " >JobPortal</a>
                <a href="https://weather-search-alpha.vercel.app/" className="block px-4 py-2 hover:bg-gray-600">WeatherApp</a>
                <a href="https://darshan1839.github.io/TODOLISTREACTApp/" className="block px-4 py-2 hover:bg-gray-600">TodoListReact</a>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Mobile Menu - Burger Icon */}
        <button className="md:hidden flex flex-col space-y-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-gray-800 p-4 flex flex-col space-y-3 text-white">
          <input type="text" placeholder="Search..." className="px-3 py-1 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white" />
          <button className="px-4 py-1 bg-blue-500 rounded hover:bg-blue-600">Search</button>

          <Link to="/" className="hover:text-blue-400" onClick={()=>setMenuOpen(!menuOpen)}>Home</Link>
          <Link to="/about" className="hover:text-blue-400" onClick={()=>setMenuOpen(!menuOpen)}>About</Link>

          {/* Projects Dropdown - Mobile Version */}
          <div>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-blue-400">
              Projects ▼
            </button>
            {dropdownOpen && (
              <div className="mt-2 bg-gray-700 rounded shadow-md text-white">
                <a href="https://jobportal-1-io1y.onrender.com/" target="_blank" className="block px-4 py-2 hover:bg-gray-600 " >JobPortal</a>
                <a href="https://weather-search-alpha.vercel.app/" className="block px-4 py-2 hover:bg-gray-600">WeatherApp</a>
                <a href="https://darshan1839.github.io/TODOLISTREACTApp/" className="block px-4 py-2 hover:bg-gray-600">TodoListReact</a>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      )}

      {/* Top Bar & Page Content */}
      <TopBar />
    </>
  );
};

export default Navbar;