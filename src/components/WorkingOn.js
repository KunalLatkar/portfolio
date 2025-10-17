// src/components/WorkingOn.js
import React, { useState } from "react";
import { Code, Layers, Grid } from "lucide-react";
import Window from "../Features/window"; // ✅ correct relative path now
import "./WorkingOn.css";

export default function WorkingOn() {
  const [activeWindow, setActiveWindow] = useState(null);

  const handleOpen = (id) => setActiveWindow(id);
  const handleClose = () => setActiveWindow(null);

  return (
    <section id="working-on" className="working-on-section">
      <h2 className="text-4xl font-bold mb-8">What I'm Working On</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card" onClick={() => handleOpen("internship")}>
          <Code size={32} className="mr-4" />
          <span className="text-xl">Python Developer Intern @ Futura Apsol</span>
        </div>

        <div className="card" onClick={() => handleOpen("leetcode")}>
          <Layers size={32} className="mr-4" />
          <span className="text-xl">Leetcode: @klatkar</span>
        </div>

        <div className="card" onClick={() => handleOpen("project")}>
          <Grid size={32} className="mr-4" />
          <span className="text-xl">Portfolio Risk Calculator</span>
        </div>
      </div>

      {/* 🪟 Internship */}
      <Window
        show={activeWindow === "internship"}
        onClose={handleClose}
        title="Python Developer Intern @ Futura Apsol"
        image={`${process.env.PUBLIC_URL}/images/futura.png`}
        details={[
        "Designed a real-time color sequence detection solution using YOLO, improving quality control analytics.",
        "Developed a client-server module with Python sockets and PyQt for real-time synchronization.",
        "Created a PyQt dashboard for visual insights and quick decision-making.",
        "Deployed models on Raspberry Pi 5 + Hailo-8L (Linux) for optimized edge performance.",
        "Worked with MLflow and implemented MLOps for model tracking and deployment.",
        "Collaborated with teams to optimize data pipelines and ensure smooth integration.",
        "Documented the end-to-end workflow for reproducibility and scalability."
        ]}
      />

      {/* 🪟 Leetcode */}
        <Window
            show={activeWindow === "leetcode"}
            onClose={handleClose}
            title="Leetcode Profile"
            >
            {/* ✅ Image size and centering suggestions:
                - Vertically long image → height: "500px"
                - Horizontally wide image → height: "300px"
                - Square image → height: "400px"
                - Small logo/icon → height: "150px"
                - Full modal fit → height: "100%", width: "100%", objectFit: "cover"
            */}

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <img
                src={`${process.env.PUBLIC_URL}/images/leetcode.png`}
                alt="Leetcode"
                style={{
                    height: "300px",           // adjust this based on image type
                    borderRadius: "10px",
                    objectFit: "contain",
                    display: "block"
                }}
                />
            </div>

            <p style={{ textAlign: "center" }}>
                Solved over 100+ coding problems on data structures and algorithms.
            </p>
            <div style={{ textAlign: "center" }}>
                <a
                href="https://leetcode.com/u/klatkar"
                target="_blank"
                rel="noopener noreferrer"
                >
                View Profile : klatkar
                </a>
            </div>
        </Window>

      {/* 🪟 Project */}
      <Window
        show={activeWindow === "project"}
        onClose={handleClose}
        title="Portfolio Risk Calculator"
        image={`${process.env.PUBLIC_URL}/images/risk_calc.png`}
        details={[
            "Designed a modular financial analytics system in C++, implementing OOP principles to analyze stock portfolios and compute real-time risk metrics.",
            "Developed a custom CSV parser and risk calculator to process price data, calculate returns, volatility, and dynamic risk scores.",
            "Integrated a planned AI-driven risk prediction module using regression models for portfolio trend forecasting.",
            "Automated build and test pipelines with GitHub Actions, and managed collaborative version control using Git/GitHub.",
            "Documented complete architecture and UML diagrams, ensuring scalability, clarity, and reproducibility for future enhancements.",
        ]}
      />
    </section>
  );
}
