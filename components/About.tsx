import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 backdrop-filter backdrop-blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="relative inline-block before:content-[''] before:absolute before:w-full before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-500">
            About Me
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-2/5 group">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300 opacity-75"></div>
              <Image
                src="https://raw.githubusercontent.com/Guten-Morgen1302/harsh-patil-portfolio/main/harsh%20patil.png"
                alt="Harsh Patil"
                width={774}
                height={774}
                className="relative rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Hello, I'm Harsh Patil
            </h3>
            <p className="text-lg mb-4 leading-relaxed">
              I'm a passionate Web Developer and Designer based in Mumbai, India. I create user-friendly and visually
              stunning websites that deliver exceptional user experiences.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              With a keen eye for detail and a commitment to staying at the forefront of technology trends, I develop
              solutions that are not only beautiful but also functionally robust and scalable.
            </p>
            <div className="flex items-center">
              <div className="flex items-center mr-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>harshabhaypatil@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

