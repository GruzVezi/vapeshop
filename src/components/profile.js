import React, { useState, useEffect } from "react";
import "./styles/styles-profile.css";

const Profile = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timeoutId = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  if (!shouldRender) return null;
  
    return (
    <>
      <div
        className={`modal-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />
      <div className={`profile-modal ${isOpen ? "open" : ""}`}>
        <button onClick={onClose} className="closeButton">
          Закрыть
        </button>
        <div className="profileInfo">
          <div className="avatarContainer">
            <img src="/profile.png" alt="User avatar" className="avatar" />
          </div>
          <div className="userDetails">
            <h3 className="userName">Яна Цист</h3>
            <p className="userInfo">
              <span className="infoLabel">Номер телефона: </span>
              <span>+7 (900) 000-00-00</span>
            </p>
            <p className="userInfo">
              <span className="infoLabel">Почта: </span>
              <span>NaziWin@3reih.de</span>
            </p>
          </div>
          <button className="logoutButton">Выход</button>
        </div>
      </div>
    </>
  );
};

export default Profile;