import React, { useEffect, useState } from 'react';
import { Code, Layers, Grid } from 'lucide-react';
import ProfilePhoto from './components/ProfilePhoto';
import About from './components/About';
import Project from './components/Project';
import ThemeToggle from './components/theme'; // Import the toggle component

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('morning'); // Default theme

  // Dynamically load the selected theme CSS
  useEffect(() => {
    const existingLink = document.getElementById('theme-style');
    if (existingLink) {
      existingLink.href = `/styles/${theme}.css`;
    } else {
      const link = document.createElement('link');
      link.id = 'theme-style';
      link.rel = 'stylesheet';
      link.href = `/styles/${theme}.css`;
      document.head.appendChild(link);
    }
  }, [theme]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  const handleThemeChange = () => {
    const nextTheme =
      theme === 'morning' ? 'evening' : theme === 'evening' ? 'night' : 'morning';
    setTheme(nextTheme);
  };

  return (
    <div className={`min-h-screen ${theme}-theme`}>
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 md:px-16 border-b">
        <div className="profile flex items-center space-x-4">
          <ProfilePhoto />
          <div className="profile-info flex flex-col">
            <h1 className="text-2xl md:text-4xl font-bold">Kunal Latkar 👋</h1>
            <p>Student @ MIT-WPU | CSE (AIDS)</p>
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('projects')}
            className="text-lg hover:text-gray-600 transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-lg hover:text-gray-600 transition"
          >
            Contact
          </button>
          <a
            href="Kunal_Latkar_Resume_2025.pdf"
            download
            className="text-lg resume-btn px-4 py-2 rounded-md transition"
          >
            Resume
          </a>
          {/* Replaced button with ThemeToggle component */}
          <ThemeToggle theme={theme} onToggle={handleThemeChange} />
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 md:px-16">
        <About />

        {/* Working On */}
        <section id="working-on" className="mb-16">
          <h2 className="text-4xl font-bold mb-8">What I'm Working On</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 flex items-center">
              <Code size={32} className="mr-4" />
              <span className="text-xl">ML Models</span>
            </div>
            <div className="card p-6 flex items-center">
              <Layers size={32} className="mr-4" />
              <span className="text-xl">Systems</span>
            </div>
            <div className="card p-6 flex items-center">
              <Grid size={32} className="mr-4" />
              <span className="text-xl">Applications</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="skill-section">
              <h3 className="text-2xl font-semibold mb-3">Programming</h3>
              <p>Python</p><p>C</p><p>C++</p><p>R</p><p>HTML</p><p>CSS</p><p>Javascript</p>
            </div>
            <div className="skill-section">
              <h3 className="text-2xl font-semibold mb-3">Frameworks & Tools</h3>
              <p>Flask</p><p>Power BI</p><p>Tableau</p><p>Firebase</p>
            </div>
            <div className="skill-section">
              <h3 className="text-2xl font-semibold mb-3">Libraries</h3>
              <p>Pandas</p><p>NumPy</p><p>TensorFlow</p><p>Matplotlib</p><p>Scikit-learn</p><p>PyTorch</p><p>Streamlit</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <Project />

        {/* Contact */}
        <section id="contact" className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>
          <div className="contact-container">
            <form className="contact-form">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input type="text" id="name" className="w-full border px-4 py-2 rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input type="email" id="email" className="w-full border px-4 py-2 rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea id="message" rows="4" className="w-full border px-4 py-2 rounded-md"></textarea>
              </div>
              <button type="submit" className="contact-btn px-6 py-2 rounded-md transition">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer text-center text-sm py-6">
        © 2025 Kunal. All rights reserved.
      </footer>
    </div>
  );
}
