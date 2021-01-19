import React, { useReducer, useEffect } from "react";
import Result from "./Result";
import Movie from "./Movie";
import Popular from "./Popular";
import spinner from "../assets/ajax-loader.gif";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";

const retrievedItems = "";
const style = {
	base: {
		float: "left",
		display: "inline-block",
	},
	field: {
		margin: "auto",
	},
};
const POPULAR_API_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=vodb6jow6KRPqWqvLaN4iqFRbV3euL8k`;
//"https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8PxmU5D8tbSv0LzSeAPbqoahoTPLmA3f&q=covid vaccine";

const Home = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { movies, errorMessage, loading, searching } = state;
	useEffect(() => {
		axios.get(POPULAR_API_URL).then((jsonResponse) => {
			//console.log(jsonResponse.data.results);
			//console.log(jsonResponse.data.response.docs);
			dispatch({
				type: "SEARCH_SUCCESS",
				payload: jsonResponse.data.results,
				//payload: jsonResponse.data.response.docs,
			});
		});
	}, []);

	const refreshPage = () => {
		window.location.reload();
	};

	const search = (searchValue) => {
		dispatch({
			type: "SEARCH_REQUEST",
		});

		axios(
			`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8PxmU5D8tbSv0LzSeAPbqoahoTPLmA3f&q=${searchValue}`
		).then((jsonResponse) => {
			//console.log(jsonResponse.data.response.docs);
			dispatch({
				type: "SEARCH_SUCCESS",
				payload: jsonResponse.data.response.docs,
			});
		});
	};

	if (searching) {
		console.log("searching");
		const retrievedItems =
			loading && !errorMessage ? (
				<img className="spinner" src={spinner} alt="Loading spinner" />
			) : errorMessage ? (
				<div className="errorMessage">{errorMessage}</div>
			) : (
				movies.map((movie, index) => <Movie movie={movie} />)
			);
		return (
			<div>
				<Result
					search={search}
					data={retrievedItems}
					message="Search Results..."
				/>
			</div>
		);
	} else {
		console.log("home page");
		const popularItems =
			loading && !errorMessage ? (
				<img className="spinner" src={spinner} alt="Loading spinner" />
			) : errorMessage ? (
				<div className="errorMessage">{errorMessage}</div>
			) : (
				movies.map((movie, index) => <Popular popular={movie} />)
			);
		return (
			<div>
				<Result search={search} data={popularItems} message="Most Popular..." />
			</div>
		);
	}
};

export default Home;
