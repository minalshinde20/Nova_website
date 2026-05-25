import { useState } from "react"

function Navbar() {

const [open,setOpen] = useState(false)

return (
<nav className="bg-[#0F172A] sticky top-0 z-50 shadow-sm w-full">

  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-3 cursor-pointer">

      <img
        src="/images/logo.jpeg"
        alt="logo"
        className="w-12 h-12 object-contain hover:rotate-6 duration-300"
      />

      <h1 className="text-2xl font-extrabold text-white">
        Nova
      </h1>

    </div>


    {/* Desktop Navigation */}
    <ul className="hidden md:flex items-center gap-10 font-medium text-gray-300">

      <li className="hover:text-orange-400 hover:-translate-y-1 duration-300 cursor-pointer">
        Home
      </li>

      <li className="hover:text-orange-400 hover:-translate-y-1 duration-300 cursor-pointer">
        About Us
      </li>

      <li className="hover:text-orange-400 hover:-translate-y-1 duration-300 cursor-pointer">
        Features
      </li>

      <li className="hover:text-orange-400 hover:-translate-y-1 duration-300 cursor-pointer">
        Services
      </li>

      <li className="hover:text-orange-400 hover:-translate-y-1 duration-300 cursor-pointer">
        Testimonials
      </li>

    </ul>


    {/* Desktop Button */}
    <button className="
      hidden md:block
      bg-orange-400
      px-6 py-3
      rounded-full
      text-white
      font-semibold
      hover:bg-[#1E3A8A]
      hover:scale-105
      duration-500">

      Get Started
    </button>


    {/* Hamburger */}
    <div
      className="md:hidden text-white text-3xl cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {open ? "✕" : "☰"}
    </div>

  </div>


  {/* Mobile Menu */}
  <div className={`
    md:hidden
    bg-[#0F172A]
    px-6
    pb-6
    overflow-hidden
    transition-all
    duration-500
    ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
  `}>

    <ul className="flex flex-col gap-5 text-gray-300">

      <li className="hover:text-orange-400 cursor-pointer">Home</li>
      <li className="hover:text-orange-400 cursor-pointer">About Us</li>
      <li className="hover:text-orange-400 cursor-pointer">Features</li>
      <li className="hover:text-orange-400 cursor-pointer">Services</li>
      <li className="hover:text-orange-400 cursor-pointer">Testimonials</li>

    </ul>

    <button className="
      mt-6
      w-full
      bg-orange-400
      py-3
      rounded-full
      text-white
      font-semibold
      hover:bg-white
      hover:text-[#0F172A]
      duration-500">

      Get Started
    </button>

  </div>

</nav>
)
}

export default Navbar