const {v4: uuid4} = require("uuid");

class Post {
    constructor(description, user, like, comment, url) {
        this.id = Date.now().toString();
        this.description = description;
        this.user = user;
        this.like = like;
        this.comment = comment;
        this.url = url;
    }
}

module.exports = Post;