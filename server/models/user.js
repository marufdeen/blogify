/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name field cannot be empty'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Last name field cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password field cannot be empty'
        }
      }
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: true
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: true
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linkedIn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    enabled: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    profile: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: 'userId'
    });
  };
  return User;
};
