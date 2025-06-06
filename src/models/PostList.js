class PostList{
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }

    getAllPosts() {
        return this.posts;
    }

    getPostById(id) {
        const post = this.posts.find(post => post.id == id);
        if (!post) throw new Error("Post não encontrado");
        return post;
    }

    updatePost(id, updatePost) {
        const post = this.getPostById(id);
        Object.assign(post, updatePost);
        return post;
    }

    deletePost(id) {
        this.posts = this.posts.filter(post => post.id !=id);
    }
}

module.exports = PostList;