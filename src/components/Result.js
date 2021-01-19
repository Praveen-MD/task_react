import React from "react";
import Header from "./Header";
import Search from "./Search";
import { Container, Card } from "react-bootstrap";
const Result = (props) => {
	return (
		<div
			style={{
				backgroundColor: "black",
			}}
		>
			<Header text="Newyork Times" />
			<Search style={{ alignSelf: "center" }} search={props.search} />
			<h4 style={{ textAlign: "center" }}>{props.message}</h4>
			<Container
				style={{
					height: "2500px",
				}}
			>
				<div className="card_dec ">{props.data}</div>:
			</Container>
		</div>
		/*	<div>
			<div
				style={{
					backgroundColor: "black",
				}}
				className="row"
			>
				<div style={{ alignSelf: "center" }} className="col-md-6">
					<Header text="Newyork Times" />
				</div>
				<div style={{ alignSelf: "center" }} className="col-md-6">
					<Search search={props.search} />
				</div>
			</div>

			<Container>
				<h2>data</h2>
				<div className="row">{props.retrievedMovies}</div>
			</Container>
			<div
				style={{
					backgroundColor: "black",
				}}
				className="row"
			>
				<div className="col-md-12">
					<p className="text-white text-center">Newyork Times &copy; 2021</p>
				</div>
			</div>
		</div>*/
	);
};

export default Result;
