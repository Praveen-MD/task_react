import React from "react";
import { Container, Card } from "react-bootstrap";

var address = "http://www.nytimes.com/";
var imageLink = "";
var LINK = "";
const Movie = ({ movie, onClick }) => {
	movie.multimedia.length > 1 && true
		? (imageLink = movie.multimedia[3].url)
		: (imageLink = "");

	LINK = address + imageLink;
	function handleClick(id) {
		onClick(id);
	}

	return (
		/*<Card
			className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
			style={{
				padding: "5px",
			}}
		></Card>*/
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
			<Card.Img
				class="card-img-top"
				src={LINK}
				alt="No image available"
				width="300px"
				height="250px"
			/>
			<Card.Body>
				<a href={movie.web_url} target="_blank">
					{movie.headline.main}
				</a>
			</Card.Body>
		</Card>
	);
};

export default Movie;
