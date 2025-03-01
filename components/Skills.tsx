import Image from "next/image"

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-gray-900/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80')] bg-cover bg-fixed opacity-10"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="relative inline-block before:content-[''] before:absolute before:w-full before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-500">
            My Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 relative"
            >
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={64}
                height={64}
                className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-center font-medium">{skill.name}</span>
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600/90 to-purple-600/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="text-center p-4">
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <p className="text-sm">Advanced proficiency</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

