'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profilePicture: {
        type: Sequelize.STRING,
        allowNull: true
      },
      company: {
        type: Sequelize.STRING,
        allowNull: true
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true
      },
      profession: {
        type: Sequelize.STRING,
        allowNull: true
      },
      skills: {
        type: Sequelize.STRING,
        allowNull: true
      },
      github: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bio: {
        type: Sequelize.STRING,
        allowNull: true
      },
      twitter: {
        type: Sequelize.STRING,
        allowNull: true
      },
      facebook: {
        type: Sequelize.STRING,
        allowNull: true
      },
      linkedIn: {
        type: Sequelize.STRING,
        allowNull: true
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      profile: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
