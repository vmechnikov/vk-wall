import React from 'react';
import './styles.scss';

class PostCard extends React.Component {

	renderImage = post => {
		console.log(post.text);

		if (post.attachments) {
			return post.attachments.map(postAttachment => {
				if (postAttachment.type === 'photo') {
					return postAttachment.photo.sizes.map((photoSize, index) => {
						if (photoSize.type === 'x') {
							return <img
											key={index}
											className="post__image"
											src={`${photoSize.url}`}
											alt=""
										/>
						}
					});
				}
			});
		}
	};

	render() {
		const { post } = this.props;

		return (
			<li
				className="post"
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				{this.renderImage(post)}
				<span className="post__text" dangerouslySetInnerHTML={{__html: post.text.replace(/\r?\n/g, '<br />')}}>
					{/*{post.text.replace(/\r?\n/g, '<br />')}*/}
				</span>
			</li>
		);
	}
}

export default PostCard;
