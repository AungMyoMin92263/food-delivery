import React from 'react'
import classes from './MenuContainer.module.css'
const MenuContainer = ({ link, icon }) => {
  return (
    <li className={classes.MenuContainer}>
      <a href={link}>
        <span className={classes.icon}>{icon}</span>
      </a>
    </li>
  )
}

export default MenuContainer