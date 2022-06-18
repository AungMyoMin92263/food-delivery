import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import React from "react";
// import "./Header.css";

import { HeaderStyled } from "./Header.styled";

const Header = () => {

  const logoUrl =
    "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc";
  const profileUrl =
    "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937";
  return (
    <HeaderStyled >
      <img src={logoUrl} alt="" className="logo" />

      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img src={profileUrl} alt="" className="profilePic" />
        </div>
        <h2 className="userName">Vetrivel Ravi</h2>
      </div>

      <div className="toggleIcon">
        <BarChart className="toggleIcon" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
