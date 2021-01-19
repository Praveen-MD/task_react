import React from "react";
import { Container, Card } from "react-bootstrap";
var address = "http://www.nytimes.com/";
var imageLink = "";
var LINK = "";
const Popular = (movie, onClick) => {
	//console.log(movie.popular);
	/*movie.media > 1 && true
		? (imageLink = movie.media[0].metadata[0].url)
		: (imageLink = "");
	LINK = address + imageLink;
	function handleClick(id) {
		onClick(id);
	}*/
	return (
		<Card
			className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
			style={{
				width: "350px",
				height: "350px",
				padding: "20px",
				float: "left",
				marginRight: "10px",
				marginTop: "10px",
			}}
		>
			<Card.Body>
				<h2>Title</h2>
				<h6> {movie.popular.title}</h6>
				<h2>Abstract</h2>
				<a href={movie.popular.url} target="_blank">
					<h6>{movie.popular.abstract}</h6>
				</a>
				<p>{movie.popular.updated}</p>
			</Card.Body>
		</Card>
	);
};

export default Popular;
/*<Card.Img
				class="card-img-top"
				src={LINK}
				alt="No image available"
				width="300px"
				height="250px"
			/>*/
