const fs = require('node:fs/promises');

async function getStoredPosts() {
    const rawFileContent = await fs.readFile('posts.json', { encoding : 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedPosts = data.posts ?? [];
    return storedPosts;
}

async function storePosts(posts) {
    return await fs.writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;