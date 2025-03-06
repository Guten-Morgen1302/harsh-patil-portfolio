import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Weather App",
    description: "Real-time weather application with forecast capabilities and location search",
    image:
      "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    liveDemo: "https://weather-app-25.vercel.app/",
    github: "https://github.com/Guten-Morgen1302/weather-app",
  },
  {
    title: "E-commerce Platform",
    description: "E-commerce platform with integrated payment processing and inventory management",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "#",
    github: "https://github.com/Guten-Morgen1302/E-commerce-Platform",
  },
  {
    title: "Task Management System",
    description: "Task management system with real-time updates and team collaboration features",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React", "Firebase", "Material UI"],
    liveDemo: "#",
    github: "https://github.com/Guten-Morgen1302/Task-Management-System",
  },
  {
    title: "Social Media Dashboard",
    description: "Social media dashboard with analytics and content scheduling capabilities",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80",
    technologies: ["Vue.js", "Express", "Chart.js"],
    liveDemo: "https://social-sync-dashboard.vercel.app/",
    github: "https://github.com/Guten-Morgen1302/Social-Media-Dashboard",
  },
  {
    title: "Fitness Tracking App",
    description: "Fitness tracking application with personalized workout plans and progress metrics",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React Native", "Node.js", "MongoDB"],
    liveDemo: "https://fitness-hub-pro.vercel.app/",
    github: "https://github.com/Guten-Morgen1302/FitnessHub",
  },
  {
    title: "Recipe Sharing Platform",
    description: "Recipe sharing platform with ingredient search and meal planning features",
    image:
      "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://cook-with-us.vercel.app/",
    github: "https://github.com/Guten-Morgen1302/Recipe-Sharing-Platform",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 to-blue-900/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="relative inline-block before:content-[''] before:absolute before:w-full before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-500">
            My Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group h-[400px] relative rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="absolute inset-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-300 transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600/70 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3 transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  <Link
                    href={project.liveDemo}
                    className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="https://github.com/Guten-Morgen1302?tab=repositories"
            className="flex items-center justify-center px-6 py-4 border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg shadow-md transform hover:scale-95 hover:shadow-lg transition-all duration-300"
          >
            <span className="text-lg font-semibold mr-4">View All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white transform transition-all duration-300 ease-in-out group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
