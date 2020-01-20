import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { fetchWallPosts } from '../../data/actions';
import PostCard from '../PostCard';

class PostsList extends React.Component {

	componentDidMount() {
		this.props.getWallPosts();
	}

	render() {
		const { wallPosts } = this.props;

		return (
			<div className="list-wrapper">
				{wallPosts.length > 0
					? <ul className="posts__list">
						{wallPosts.map((post, index) => (
							<PostCard
								post={post}
								key={index}
							/>
						))}
						</ul>
					: null
				}
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
