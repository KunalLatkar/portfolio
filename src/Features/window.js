// src/Features/Window.js
import React, { useEffect, useState, useCallback } from "react";
import "./window.css";

export default function Window({
  show,
  onClose,
  title,
  images = [],
  details,
  compact = false,
  children
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  /** 🔹 Wrap handlers in useCallback so dependencies remain stable */
  const nextImage = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  /** 🔹 Keyboard events */
  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [show, nextImage, prevImage, handleClose]);

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal ${compact ? "modal-compact" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-content">
          {images.length > 0 && (
            <div className="image-slider">
              <img
                src={images[currentIndex]}
                alt={`${title} - ${currentIndex + 1}`}
                className="modal-image fade"
              />

              {images.length > 1 && (
                <>
                  <button className="nav-btn left" onClick={prevImage}>‹</button>
                  <button className="nav-btn right" onClick={nextImage}>›</button>
                </>
              )}
            </div>
          )}

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
