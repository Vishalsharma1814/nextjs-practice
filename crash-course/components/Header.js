import React from "react";
import hearerStyles from "../styles/Header.module.css";

const Header = () => {
	return (
		<div>
			<h1 className={hearerStyles.title}>
				<span>WebDev</span> News
			</h1>
			<p className={hearerStyles.description}>
				keep uo to date with latest webdev news
			</p>
		</div>
	);
};

export default Header;
