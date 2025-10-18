import { useState } from 'react';
import './About.css';
import Window from '../Features/window';

export default function About() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const closeAll = () => {
    setShowEmail(false);
    setShowPhone(false);
  };

  return (
    <section id="about" className="about-section">
      <div className="contact-icons">
        <div onClick={() => setShowEmail(true)} title="Email">
          <img src="https://img.icons8.com/ios-filled/50/000000/new-post.png" alt="Email" className="contact-icon" />
        </div>
        <a href="https://www.linkedin.com/in/kunal-latkar-1554b6259/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="contact-icon" />
        </a>
        <a href="https://github.com/KunalLatkar" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className="contact-icon" />
        </a>
        <div onClick={() => setShowPhone(true)} title="Phone">
          <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="Phone" className="contact-icon" />
        </div>
      </div>

      <Window
          show={showEmail}
          onClose={closeAll}
          title="Email"
          compact
        >
          <p>kunallatkar04@gmail.com</p>
      </Window>
      <Window
          show={showPhone}
          onClose={closeAll}
          title="Phone"
          compact
        >
          <p>+91 9607095223</p>
      </Window>

        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl">
          I’m a B.Tech student in Computer Science and Engineering at MIT-WPU, specializing in Artificial Intelligence and Data Science.
          My academic journey has helped me build a strong foundation in machine learning, deep learning, and data analytics.
          Currently, I’m working as a Python Developer Intern at Futura Apsol, where I’m designing real-time color sequence detection systems using YOLO and deploying models on Raspberry Pi with MLOps integration.
          I’ve also worked on AI projects like a Question Generation System using T5/BART and a Skin Disease Classification model using VGG-16, exploring how AI can solve real-world problems.
          Beyond academics, I’m passionate about problem-solving and have solved 100+ challenges on LeetCode, earning a 50-day consistency badge.
          With a curiosity-driven mindset, I aim to apply AI and data-driven insights to build meaningful, real-world solutions.        </p>
    </section>
  );
}

function PopupModal({ children, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
