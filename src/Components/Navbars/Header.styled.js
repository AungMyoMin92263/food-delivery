import styled from 'styled-components'

// import { themes } from '../theme/color'
export const HeaderStyled = styled.div`

display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  height: 60px;
  width: 100%;
  /* background: #fff; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);

  .logo {
    max-width: 40px;
    max-height: 40px;
    object-fit: cover;
  }
  .inputBox {
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    overflow-x: hidden;
    padding: 8px 15px;
    width: 120px;
  }
  
  .inputBox .searchIcon {
    color: #787a84;
    font-size: 20px;
  }
  
  .inputBox input {
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    background: transparent;
    color: #787a84;
    padding-left: 8px;
    font-size: 14px;
    font-weight: 500;
  }
  
  .shoppingCart {
    position: relative;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    
  }
  
  .shoppingCart .cart{
      font-size: 30px;
  }
  
  .shoppingCart .cart_content {
    width: 20px;
    height: 20px;
    background-color: #f8901d;
    border-radius: 100%;
    min-width: 20px;
    max-width: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -8px;
    right:0;
    
  }
  
  .shoppingCart .cart_content p{
      font-size: 12px;
      font-weight: 500;
      color:#faf9fb
  }
  
  .profileContainer {
      display: flex;
      align-items: center;
  }
  
  .profileContainer .imgBox{
      width: 40px;
      height: 40px;
      min-width: 40px;
      border-radius: 100vw;
      background: #444;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }
  .profileContainer .imgBox .profilePic{
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  
  .profileContainer .userName {
    font-size: 16px;
    margin-left: 8px;
    font-weight: 500;
    display: none;
    align-items: center;
  }
`