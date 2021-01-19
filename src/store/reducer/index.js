export const initialState = {
	searching: false,
	loading: true,
	movies: [],
	errorMessage: null,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "SEARCH_REQUEST":
			return {
				...state,
				searching: true,
				loading: true,
				errorMessage: null,
			};
		case "SEARCH_SUCCESS":
			return {
				...state,
				//searching: false,
				loading: false,
				movies: action.payload,
			};
		case "SEARCH_FAILURE":
			return {
				...state,
				loading: false,
				errorMessage: action.error,
			};
		default:
			return state;
	}
};
