import React, { useState } from 'react';
import './ProfilePhoto.css'; // This is where your CSS will go

export default function ProfilePhoto() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Profile Image (grayscale) */}
      <div
        className="profile-image w-16 h-16 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
        onClick={openModal}
      >
        <img
          src="/profile.jpg" // Make sure profile.jpg is in the /public folder
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="backdrop" onClick={closeModal}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <img
              src="/profile.jpg"
              alt="Full Size"
              className="popup-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
