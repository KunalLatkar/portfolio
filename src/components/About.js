import { useState } from 'react';
import './About.css';

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
        <a href="https://www.linkedin.com/in/sara" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="contact-icon" />
        </a>
        <a href="https://github.com/sara" target="_blank" rel="noopener noreferrer" title="GitHub">
          <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className="contact-icon" />
        </a>
        <div onClick={() => setShowPhone(true)} title="Phone">
          <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="Phone" className="contact-icon" />
        </div>
      </div>

      {showEmail && (
        <PopupModal onClose={closeAll}>
          <strong>Email:</strong><br />
          kunallatkar04@gmail.com
        </PopupModal>
      )}

      {showPhone && (
        <PopupModal onClose={closeAll}>
          <strong>Phone:</strong><br />
          +1 (234) 567-890
        </PopupModal>
      )}

        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl">
            I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science at MIT-WPU, 
            with a specialization in Artificial Intelligence and Data Science. 
            Throughout my academic journey, I have developed a strong foundation in AI, machine learning, and data analytics.
            I have had the opportunity to work on several hands-on projects, including Natural Language Processing (NLP), 
            where I gained experience in training and fine-tuning machine learning models for various applications. 
            One of my notable projects involved developing a model for skin disease classification, which allowed me to explore both the technical and practical aspects of AI in the healthcare domain.
            With a passion for leveraging AI and data science to solve real-world challenges, 
            I am eager to continue expanding my knowledge and skills in these rapidly evolving fields.
        </p>
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
