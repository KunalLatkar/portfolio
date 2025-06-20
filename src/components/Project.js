import { useState } from 'react';
import './Project.css'; // Make sure the CSS file is imported

const projects = [
  {
    id: 1,
    title: 'Natural Language Processing (NLP)',
    image: 'NLP.jpg',
    description: 'Developed a Question Generation system using PreTrained models like T5 and BART.',
    details: [
      'Used state-of-the-art models like T5 and BART.',
      'Trained using a large corpus of Q&A datasets.',
      'Achieved significant improvement in question generation accuracy.',
      'Implemented fine-tuning strategies to optimize performance.',
      'GitHub Link: [NLP Project Repo](https://github.com/your-username/nlp-project)'
    ]
  },
  {
    id: 2,
    title: 'Machine Learning - Skin Disease Classification',
    image: 'ML.png',
    description: 'Built a transformer-based model for Skin Disease classification used VGG-16.',
    details: [
      'Used VGG-16 model for feature extraction.',
      'Trained on a large dataset of labeled skin disease images.',
      'Achieved a high accuracy rate of 94% on test data.',
      'Implemented model optimization techniques like dropout and data augmentation.',
      'GitHub Link: [ML Project Repo](https://github.com/your-username/ml-skin-disease-classification)'
    ]
  },
    {
    id: 3,
    title: 'Computer Vision - Bottle checking system ',
    image: 'cv.png',
    description: "Built system that checkes bottle's overall quality.",
    details: [
      'Used OpenCV to check jucie level in bottle.',
      'Trained on a large dataset of labeled skin disease images.',
      'Achieved a high accuracy rate of 94% on test data.',
      'Implemented model optimization techniques like dropout and data augmentation.',
      'GitHub Link: [ML Project Repo](https://github.com/your-username/ml-skin-disease-classification)'
    ]
  },

];

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="project-card border border-gray-200 rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="thumb" />
            <div className="content p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button
                onClick={() => openModal(project)}
                className="text-black border-b border-black pb-1 hover:text-gray-600 transition"
              >
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>X</button>
            <div className="modal-content">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
              <h3>{selectedProject.title}</h3>
              <ul>
                {selectedProject.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
