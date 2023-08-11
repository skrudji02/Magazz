'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('basket_products', 'quantity', {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('basket_products', 'quantity');
  }
};
