import React, { useEffect } from "react";
// import { BottomSytled } from "./Bottom.styled";
import { AccountBalanceWalletOutlined, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material";
import MenuContainer from "../../MenuContainer/MenuContainer";
import classes from './Bottom.module.css'
const menus = [
	{ name: "home", link: "#", icon: <HomeRounded sx={{ fontSize: 26, color: '#373848' }} className='iconItem'/>},
	{ name: "chat", link: "#", icon: <Chat sx={{ fontSize: 26, color: '#373848' }}/> },
	{ name: "wallet", link: "#", icon: <AccountBalanceWalletOutlined sx={{ fontSize: 26, color: '#373848' }}/> },
	{ name: "favourite", link: "#", icon: <Favorite sx={{ fontSize: 26, color: '#373848' }}/> },
	{ name: "summerize", link: "#", icon: <SummarizeRounded sx={{ fontSize: 26, color: '#373848' }} /> },
	{ name: "settings", link: "#", icon: <Settings sx={{ fontSize: 26, color: '#373848' }}/> },
];

const Bottom = () => {
	useEffect(() => {
		const menuLi = document.querySelectorAll('#menu li')

		const setMenuActive = () => {
			menuLi.forEach((n) => n.classList.remove('active'))
			console.log(this)
			this.classList.add('active');

		}
		menuLi.forEach((n) => n.addEventListener("click", setMenuActive))
	}
		, [])
	return (

		<button className={classes.button}>
			<ul id='menu'>
				{menus.map((menu, index) => (
					<MenuContainer link={menu.link} icon={menu.icon}/>
				))}
				<div className={classes.indicator}></div>
			</ul>
		</button>
	);
};

export default Bottom;
