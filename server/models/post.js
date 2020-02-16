/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title field cannot be empty'
        }
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Content field cannot be empty'
        }
      }
    },
    contentImage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    visible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments',
      onDelete: 'CASCADE',
    });
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users',
      onDelete: 'CASCADE',
    });
  };
  return Post;
};
