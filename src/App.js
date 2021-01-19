import React from "react";
import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
const App = () => {
	return (
		<div>
			<Router>
				<div>
					<Navbar bg="dark" variant="dark" collapseOnSelect>
						<Navbar.Toggle navbar-toggler navbar-toggler-left ml-5 />
						<Nav className=" mr-auto">
							<Link to="/" />
							<Link to="/Home">Home</Link>
							<Link to="/Details">Details</Link>
						</Nav>
					</Navbar>
				</div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/Home">
						<Home />
					</Route>
					<Route path="/Details">
						<Details />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
