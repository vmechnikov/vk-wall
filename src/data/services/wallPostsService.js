const vkApi = require('../vkApi');

export const getWallPosts = () => {
	return new Promise(function (resolve, reject) {
		resolve(vkApi.response.items);
	}).then(res => res);
};
