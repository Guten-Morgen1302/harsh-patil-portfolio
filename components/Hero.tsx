import { useEffect, useState } from "react";

export default function Hero({ scrollToSection }) {
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [currentRole, setCurrentRole] = useState("Web Developer & Designer"); // Default text

  const scrollToProjects = (e) => {
    e.preventDefault();
    scrollToSection("projects");
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    scrollToSection("about");
  };

  // Typing effect logic for the role switching between "Web Developer & Designer" and "UI/UX Developer"
  useEffect(() => {
    const roles = ["Web Developer & Designer", "UI/UX Developer"];
    const typingSpeed = 120; // Speed of typing (slower for a smoother effect)
    const pauseDuration = 1500; // Pause duration before switching roles

    // Function to handle the typing effect
    const typeText = () => {
      if (typingIndex < currentRole.length) {
        setTypedText((prev) => prev + currentRole[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      } else {
        if (!isTypingFinished) {
          setIsTypingFinished(true);
          setTimeout(() => {
            setIsTypingFinished(false);
            setTypingIndex(0); // Reset typing index to start over
            setTypedText(""); // Clear the typed text
            // Switch between the roles
            setCurrentRole((prev) =>
              prev === roles[0] ? roles[1] : roles[0]
            );
          }, pauseDuration); // Wait for 1.5 seconds before switching
        }
      }
    };

    // Typing interval
    const typingInterval = setInterval(typeText, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [typingIndex, isTypingFinished, currentRole]); // Runs when typingIndex, isTypingFinished, or currentRole changes

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-50"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-[fadeInDown_1s_ease_0.5s_forwards]">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Harsh Patil
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 opacity-0 animate-[fadeInUp_1s_ease_0.7s_forwards]">
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 animate-pulse-glow`}
            >
              {typedText}
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-[fadeIn_1s_ease_0.9s_forwards]">
            Building modern, user-friendly websites that look great and work perfectly
          </p>
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25 opacity-0 animate-[fadeIn_1s_ease_1.1s_forwards]"
          >
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" onClick={scrollToAbout} className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
