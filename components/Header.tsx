"use client"

import { useState } from "react"

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
]

export default function Header({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 py-4 px-6">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300">Harsh Patil</div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative text-lg hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-400 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full ${
                  activeSection === item.id ? "text-blue-400 after:w-full" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.id)}
              className="block px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

