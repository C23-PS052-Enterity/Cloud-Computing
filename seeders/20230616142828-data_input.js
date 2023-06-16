'use strict';

const dataInput = require('../data/data_input.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const dataInputToBeSeed = dataInput.map((eachDataInput) => {
      return {
        dayOfYear: eachDataInput.dayOfYear,
        Quantity_Ordered: eachDataInput.Quantity_Ordered,
        produk_id: eachDataInput.produk_id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('data_inputs', dataInputToBeSeed, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
