import { useState } from "react";
import "./Project.css";
import Window from "../Features/window"; // ✅ Shared modal window

const projects = [
  {
    id: 1,
    title: "NLP - Question Generation System",
    image: `${process.env.PUBLIC_URL}/images/ISSAK.png`,
    description:
      "Developed a Question Generation system using PreTrained models like T5 and BART.",
    details: [
      "Used state-of-the-art models like T5 and BART.",
      "Trained using a large corpus of Q&A datasets.",
      "Achieved significant improvement in question generation accuracy.",
      "Implemented fine-tuning strategies to optimize performance.",
      "GitHub Link: https://github.com/KunalLatkar/ISSAK",
    ],
    github: "https://github.com/KunalLatkar/ISSAK",
  },
  {
    id: 2,
    title: "ML - Water Quality Contamination Prediction",
    image: `${process.env.PUBLIC_URL}/images/Water_quality_check.png`,
    description:
      "Built a machine learning pipeline to predict water contamination using classical algorithms.",
    details: [
      "Used environmental water quality parameters (pH, BOD, DO, etc.) from CPCB/WHO-compliant datasets.",
      "Preprocessed and cleaned multi-year government data (2012–2023) with imputation and outlier handling.",
      "Engineered a binary target variable (Contaminated) based on WHO/CPCB safety thresholds.",
      "Trained and evaluated models including Logistic Regression, Random Forest, XGBoost, and AdaBoost.",
      "Visualized model performance using confusion matrix, ROC curves, and feature importance plots.",
      "Achieved high precision and recall scores, indicating effective contamination classification.",
      "GitHub Link: https://github.com/KunalLatkar/Water-Quality-Contamination-Prediction",
    ],
    github: "https://github.com/KunalLatkar/Water-Quality-Contamination-Prediction",
  },
  {
    id: 3,
    title: "DL - Skin Disease Classification",
    image: `${process.env.PUBLIC_URL}/images/Skin_Disease_Classification.png`,
    description:
      "Built a transformer-based model for Skin Disease classification used VGG-16.",
    details: [
      "Used VGG-16 model for feature extraction.",
      "Trained on a large dataset of labeled skin disease images.",
      "Achieved a high accuracy rate of 94% on test data.",
      "Implemented model optimization techniques like dropout and data augmentation.",
      "GitHub Link: https://github.com/KunalLatkar/SkinDiseaseClassification",
    ],
    github: "https://github.com/KunalLatkar/SkinDiseaseClassification",
  },
  {
    id: 4,
    title: "CV – Bottle Inspection System",
    image: `${process.env.PUBLIC_URL}/images/Bottle_Inspection_System.png`,
    description:
      "Developed an automated system for assessing the overall quality of bottles using computer vision techniques.",
    details: [
      "Implemented OpenCV-based image processing to assess juice levels within the bottles.",
      "Designed a module to verify proper cap placement and ensure secure sealing.",
      "Developed a label inspection feature to detect misalignment or defects.",
      "Integrated all components into a unified, end-to-end inspection system for deployment in a factory environment.",
      "GitHub Link: https://github.com/KunalLatkar/Bottle-Inspection-System",
    ],
    github: "https://github.com/KunalLatkar/Bottle-Inspection-System",
  },
];

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openWindow = (project) => setSelectedProject(project);
  const closeWindow = () => setSelectedProject(null);

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>

      <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card border border-gray-200 rounded-lg overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="thumb" />
            <div className="content p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* ✅ Buttons Row */}
              <div className="btn-row">
                <button
                  onClick={() => openWindow(project)}
                  className="btn learn-more"
                >
                  Learn more
                </button>

                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="btn code-btn"
                >
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Reuse our shared Window component */}
      {selectedProject && (
        <Window show={true} onClose={closeWindow}>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="window-image"
          />
          <h3>{selectedProject.title}</h3>
          <ul>
            {selectedProject.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </Window>
      )}
    </section>
  );
}

export default Project;
