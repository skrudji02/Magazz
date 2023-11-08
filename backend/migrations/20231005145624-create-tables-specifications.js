'use strict';
const { Product } = require('../models/product-model');
//const sequelize = require('../db');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    //const sequelize = new Sequelize('sqlite::memory:');
  

    
    const SpecificationsProducts = await queryInterface.createTable('specifications_products', {
      id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      productId: {type: Sequelize.DataTypes.INTEGER, references: {
        model:'products',
        key: "id"
      }},
      denomination: {type: Sequelize.DataTypes.JSONB, allowNull: false},
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });

    //SpecificationsProducts.belongsTo(Product, {as: 'Product', foreignKey: 'productId'});
    //SpecificationsProducts.belongsTo(Specifications, {as: 'Specifications', foreignKey: 'specificationId'});

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('specifications_products');
    await queryInterface.dropTable('specifications');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
