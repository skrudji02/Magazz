'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn('products', 'rating', {
      type: Sequelize.DataTypes.DECIMAL(2,1),
      defaultValue: 0,
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {

    queryInterface.changeColumn('products', 'rating', {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 0,
    })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
