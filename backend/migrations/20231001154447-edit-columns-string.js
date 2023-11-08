'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.DataTypes.STRING(30),
    });
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.DataTypes.STRING(100),
    });
    await queryInterface.changeColumn('users', 'role', {
      type: Sequelize.DataTypes.STRING(20),
    });
    await queryInterface.changeColumn('brands', 'name', {
      type: Sequelize.DataTypes.STRING(40),
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.changeColumn('users', 'role', {
      type: Sequelize.DataTypes.STRING,
    });
    await queryInterface.changeColumn('brands', 'name', {
      type: Sequelize.DataTypes.STRING,
    });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
