const User = require("./User");
const BlogPost = require("./BlogPost");

User.hasMany(BlogPost, {
  foreignKey: "author",
  onDelete: "CASCADE",
});

BlogPost.belongsTo(User, {
  foreignKey: "author",
});

module.exports = { User, BlogPost };
