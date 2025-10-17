// src/Features/Window.js
import React from "react";
import "./window.css";

export default function Window({ show, onClose, title, image, details, children }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-content">
          {image && <img src={image} alt={title} className="modal-image" />}
          {title && <h3>{title}</h3>}
          {details && (
            <ul>
              {details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
