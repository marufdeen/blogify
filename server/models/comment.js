/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    visitorName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Visitor\'s name field cannot be empty'
        }
      }
    },
    visitorEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty'
        },
        isEmail: {
          msg: 'invalid email address'
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
    }
  }, {});

  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId'
    });
  };
  return Comment;
};
