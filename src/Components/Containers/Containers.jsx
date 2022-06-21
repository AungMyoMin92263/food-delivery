import React, { useEffect } from "react";
import './Container.css'
import Header from "../Navbars/Header/Header";
import { useTheme } from "styled-components";
import Bottom from "../Navbars/Bottom/Bottom";

const Containers = ({ children }) => {
  
  

  const theme =useTheme()
  return (  
    <div className="container">
      {/* Header section */}
      <Header theme={theme}/>
      {/* Main Container */}
        {children}
      {/* Bottom Container */}
      <Bottom />
    </div>
  );
};

export default Containers;
