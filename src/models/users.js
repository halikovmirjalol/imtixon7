class User {
    constructor(id, username, image, password, isDeleted=false) {
        
        this.id = id;
        this.username = username;
        this.image = image;
        this.password = password;
        this.isDeleted = isDeleted;
    }
}

module.exports = User;