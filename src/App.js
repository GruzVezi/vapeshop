import React from "react";
import "./components/styles/styles.css";
import Header from "./components/header";

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
    </div>
  );
}

export default App;
