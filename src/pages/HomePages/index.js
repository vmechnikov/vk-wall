import React from 'react';
import { connect } from 'react-redux';
import { fetchWallPosts } from '../../data/actions';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<h2>HomePage</h2>
			</div>
		);
	}
}

const mapStateToProps = ({ wallPostsReducer }) => {
	return {
		wallPosts: wallPostsReducer.posts
	}
};

const mapDispatchToProps = dispatch => {
	return {
		getWallPosts: () => dispatch(fetchWallPosts())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
