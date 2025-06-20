import { useState } from 'react';
import './Project.css'; // Make sure the CSS file is imported

const projects = [
  {
    id: 1,
    title: 'Natural Language Processing - Question Generation System',
    image: `${process.env.PUBLIC_URL}/ISSAK.png`,
    description: 'Developed a Question Generation system using PreTrained models like T5 and BART.',
    details: [
      'Used state-of-the-art models like T5 and BART.',
      'Trained using a large corpus of Q&A datasets.',
      'Achieved significant improvement in question generation accuracy.',
      'Implemented fine-tuning strategies to optimize performance.',
      'GitHub Link: <a href="https://github.com/KunalLatkar/ISSAK" target="_blank" rel="noopener noreferrer">https://github.com/KunalLatkar/ISSAK</a>'
    ]
  },
  {
    id: 2,
    title: 'Deep Learning - Skin Disease Classification',
    image: `${process.env.PUBLIC_URL}/Skin_Disease_Classification.png`,
    description: 'Built a transformer-based model for Skin Disease classification used VGG-16.',
    details: [
      'Used VGG-16 model for feature extraction.',
      'Trained on a large dataset of labeled skin disease images.',
      'Achieved a high accuracy rate of 94% on test data.',
      'Implemented model optimization techniques like dropout and data augmentation.',
      'GitHub Link: <a href="https://github.com/KunalLatkar/SkinDiseaseClassification" target="_blank" rel="noopener noreferrer">https://github.com/KunalLatkar/SkinDiseaseClassification</a>'
    ]
  },
  {
    id: 3,
    title: 'Computer Vision – Bottle Inspection System',
    image: `${process.env.PUBLIC_URL}/Bottle_Inspection_System.png`,
    description: "Developed an automated system for assessing the overall quality of bottles using computer vision techniques.",
    details: [
      'Implemented OpenCV-based image processing to assess juice levels within the bottles.',
      'Designed a module to verify proper cap placement and ensure secure sealing.',
      'Developed a label inspection feature to detect misalignment or defects.',
      'Integrated all components into a unified, end-to-end inspection system for deployment in a factory environment.',
      'GitHub Link: <a href="https://github.com/KunalLatkar/Bottle-Inspection-System" target="_blank" rel="noopener noreferrer">https://github.com/KunalLatkar/Bottle-Inspection-System</a>'
    ]
  },
  {
    id: 4,
    title: 'Machine Learning - Water Quality Contamination Prediction',
    image: `${process.env.PUBLIC_URL}/Water_quality_check.png`,
    description: 'Built a machine learning pipeline to predict water contamination using classical algorithms.',
    details: [
      'Used environmental water quality parameters (pH, BOD, DO, etc.) from CPCB/WHO-compliant datasets.',
      'Preprocessed and cleaned multi-year government data (2012–2023) with imputation and outlier handling.',
      'Engineered a binary target variable (Contaminated) based on WHO/CPCB safety thresholds.',
      'Trained and evaluated models including Logistic Regression, Random Forest, XGBoost, and AdaBoost.',
      'Visualized model performance using confusion matrix, ROC curves, and feature importance plots.',
      'Achieved high precision and recall scores, indicating effective contamination classification.',
      'GitHub Link: <a href="https://github.com/KunalLatkar/Water-Quality-Contamination-Prediction" target="_blank" rel="noopener noreferrer">https://github.com/KunalLatkar/Water-Quality-Contamination-Prediction</a>'
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
