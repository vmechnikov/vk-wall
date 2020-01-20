import { wallPostsConstants } from '../constants';
import { getWallPosts } from '../services';

export const fetchWallPosts = () => {
	return dispatch => {
		dispatch(request());
		getWallPosts()
			.then(res => dispatch(success(res)))
			.catch(err => dispatch(failure(err)))
	};

	function request() {
		return {
			type: wallPostsConstants.GET_POSTS_REQUEST
		}
	}

	function success(wallPosts) {
		return {
			type: wallPostsConstants.GET_POSTS_SUCCESS,
			wallPosts
		}
	}

	function failure() {
		return {
			type: wallPostsConstants.GET_POSTS_FAILURE,
		}
	}
};
