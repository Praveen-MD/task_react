import React from "react";

const Header = (props) => {
	return (
		<header className="App-header">
			<h1 style={{ textAlign: "center", color: "white" }}>{props.text}</h1>
		</header>
	);
};

export default Header;
