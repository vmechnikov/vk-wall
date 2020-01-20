import { wallPostsConstants } from '../constants';

const initialState = {
	loading: false,
	posts: [],
};

const wallPostsReducer = (state = initialState, action) => {
	switch (action.type) {
		case wallPostsConstants.GET_POSTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case wallPostsConstants.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.wallPosts,
				loading: false,
			};
		case wallPostsConstants.GET_POSTS_FAILURE:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};

export default wallPostsReducer;
