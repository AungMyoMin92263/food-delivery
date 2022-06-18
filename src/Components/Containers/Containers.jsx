import React from "react";
import './Container.css'
import Header from "../Navbars/Header";
import { useTheme } from "styled-components";

const Containers = ({ children }) => {
  const theme =useTheme()
  return (  
    <div className="container">
      {/* Header section */}
      <Header theme={theme}/>
      {/* Main Container */}
        {children}
      {/* Bottom Container */}
    </div>
  );
};

export default Containers;
