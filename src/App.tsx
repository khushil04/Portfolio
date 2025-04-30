import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code, Briefcase, User, FileText, Download, Award, BookOpen, Facebook, Instagram, GraduationCap } from 'lucide-react';
import Background3D from './components/Background3D';
import TypewriterText from './components/TypewriterText';
import chemicalStore from "./assets/chemicalStore.png"
import cv from "./assets/Cv_khushil.pdf"
import img from "./assets/khushil_image.jpg"
import certificate from "./assets/Cloud_Computing.pdf"
import nptel from "./assets/nptel.png"
import mern from "./assets/mern.png"
import android from "./assets/android.png"
import gems from "./assets/gems.png"
import preorder from "./assets/preorder.png"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
    android: ["Kotlin", "Java", "XML", "Android Studio"],
    tools: ["Git", "PHP", "AWS", "Figma", "VS Code"]
  };

  const projects = [
    {
      title: "SafeChemicalStore",
      description: "A full-stack e-commerce website for selling chemicals in small and large quantities.",
      tech: ["React", "Mysql", "MongoDB", "Tailwind CSS",""],
      link: "https://github.com/khushil04/SafeChemicalStore",
      image: chemicalStore
    },
    {
      title: "Pre-order System for food",
      description: "It allows users to choose pickup and dine-in options, and eat without waiting in queues or lines.",
      tech: ["Node.js", "Css", "Mongodb", "Html"],
      image: preorder
    },
    {
      title: "GemPriceScout",
      description: "Use Firebase Cloud Messaging to send push notifications when backend detects a drop in a user's selected gemstone price. ",
      tech: ["React", "OpenWeather API", "Chart.js"],
  
      image: gems
    }
  ];

  const education = [
    {
      degree: "Schooling(CBSE Board)",
      school: "Kendriya Vidyalaya NO-3",
      year: "2020-2022",
      description: "PCM",
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />
     
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering.",
      school: "Lovely professional university",
      year: "Currently Pursuing",
      description: "Focus on Full Stack Development and Android Development",
      icon: <GraduationCap className="w-8 h-8 text-cyan-400" />git
   
    }
  ];

  const certifications = [
    {
      title: "Cloud Computing",
      organization: "NPTEL Swayam",
      date: "2024",
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      skills: ["Cloud Architecture", "AWS Services"],
      image: nptel
      
    },
    {
      title: "MERN Stack",
      organization: "Cipher School",
      date: "2024",
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      skills: ["React", "Express", "Mongodb","Node.js"],
     
      image: mern
    },
    {
      title: "Introduction to Android Development",
      organization: "Cousera",
      date: "2024",
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      skills: ["UI/UX Design", "Figma", "User Research"],
      
      image: android
    }
  ];

 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Background3D />
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-7 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl  gradient-text">Welcome to my Portfolio.</a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="nav-link text-cyan-400 hover:text-cyan-300">Home</a>
              <a href="#about" className="nav-link text-gray-300 hover:text-cyan-400">About</a>
              <a href="#skills" className="nav-link text-gray-300 hover:text-cyan-400">Skills</a>
              <a href="#certifications" className="nav-link text-gray-300 hover:text-cyan-400">Certifications</a>
              <a href="#projects" className="nav-link text-gray-300 hover:text-cyan-400">Projects</a>
              <a href="#contact" className="nav-link text-gray-300 hover:text-cyan-400">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-cyan-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-cyan-400">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Skills</a>
              <a href="#certifications" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Certifications</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <TypewriterText 
                  text="Khushil Shingari"
                  className="text-2xl text-cyan-400 font-bold"
                  speed={50}
                  delay={0}
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  <TypewriterText 
                    text="Turning Ideas Into"
                    className="block"
                    speed={50}
                    delay={1000}
                  />
                  <TypewriterText 
                    text="Digital Reality"
                    className="block gradient-text mt-2"
                    speed={50}
                    delay={2000}
                  />
                </h1>
                <TypewriterText 
                  text="Full Stack Developer & UI/UX Enthusiast"
                  className="text-xl text-gray-400 mt-4 block"
                  speed={50}
                  delay={3000}
                />
              </div>
              <TypewriterText 
                text="Crafting elegant solutions to complex problems through clean code and intuitive design."
                className="text-gray-400 text-lg block"
                speed={30}
                delay={4000}
              />
              <div className="flex space-x-4" style={{ animationDelay: '5s' }}>
                {/* <a href="#" className="social-icon text-cyan-400 hover:text-cyan-300">
                  <Facebook size={24} />
                </a> */}
                <a href="#" className="social-icon text-cyan-400 hover:text-cyan-300">
                  <Instagram size={24} />
                </a>
                <a href="https://github.com/khushil04" className="social-icon text-cyan-400 hover:text-cyan-300">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/khushilshingari04/" className="social-icon text-cyan-400 hover:text-cyan-300">
                  <Linkedin size={24} />
                </a>
              </div>
              <div className="flex space-x-4" style={{ animationDelay: '5.2s' }}>
                <a 
                  href="#projects"
                  className="button-primary px-6 py-3 text-white rounded-full transition-all duration-300 hover:scale-105"
                >
                  View My Work
                </a>
                <a 
                  href={cv}
                  download="KhushilShingari-CV.pdf"
                  className="inline-flex items-center px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-full transition-all duration-300"
                >
                  Download CV <Download className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-float">
              <div className="profile-glow rounded-full">
              <img src={img} alt="khushil_image" className="w-52 h-53 object-cover mb-4 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
              Hi there! I'm Khushil Shingari, a dedicated B.Tech student specializing in Full Stack Developer at Lovely Professional University. My academic journey is fueled by a passion for innovation and problem-solving, paired with a deep interest in Full-Stack Web Development, Data Structures and Algorithms (DSA) in Java, and Android Development.
              </p>
              <p className="text-lg text-gray-300">
              Beyond academics, I am driven by continuous learning and am always eager to stay updated with the latest technologies. From tackling challenging algorithms to collaborating on innovative projects, I strive to deliver high-quality results.
              </p>
              <p className="text-lg text-gray-300">

              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-roller-coaster">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">150+</h3>
                <p className="text-gray-400">LeetCode Questions</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">15+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">2+</h3>
                <p className="text-gray-400">Execution of Successful Events</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">3+</h3>
                <p className="text-gray-400">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  {edu.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">{edu.degree}</h3>
                    <p className="text-gray-300 mt-1">{edu.school}</p>
                    <p className="text-gray-400 text-sm mt-1">{edu.year}</p>
                    <p className="text-gray-400 mt-2">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Professional Certifications</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    {cert.icon}
                    <span className="text-lg font-semibold text-white">{cert.organization}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">Issued: {cert.date}</p>
                  {/* <p className="text-gray-400 text-sm">Credential ID: {cert.credentialId}</p> */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-4 bg-gray-800 text-cyan-400 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a 
                  href={certificate}
                  download="Cloud_Computing.pdf"
                 
                  className="inline-flex items-center px-2 py-1 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-full transition-all duration-300"
                >
                  Download Certificate <Download className="ml-2 w-4 h-4" />
                </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="skill-card glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-card glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="skill-card glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="glass-card rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Get in Touch</span>
            </h2>
            <p className="text-gray-400 text-lg">
              I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-cyan-400 focus:border-cyan-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-cyan-400 focus:border-cyan-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-cyan-400 focus:border-cyan-400"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full button-primary py-2 px-4 rounded-lg text-white transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="khushilshingari04@gmail.com"
              className="social-icon text-cyan-400 hover:text-cyan-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/khushil04"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-cyan-400 hover:text-cyan-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/khushilshingari04"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-cyan-400 hover:text-cyan-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Khushil Shingari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;