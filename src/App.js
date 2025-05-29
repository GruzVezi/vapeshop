import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Profile from "./components/profile";

const App = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileOpen(prev => !prev);
  };

  return (
    <>
      <Header onProfileClick={ toggleProfileModal } />
      {isProfileOpen && <Profile isOpen={ isProfileOpen } onClose={ toggleProfileModal }/>}
      <Footer/>
    </>
  );
}

export default App;
