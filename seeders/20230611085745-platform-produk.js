'use strict';
const platformProduk = require('../data/platform_produk.json');
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

    const dataPlatformProdukToBeSeeded = platformProduk.map((eachPlatformProduk) => {
      return {
        produk_id: eachPlatformProduk.produk_id,
        platform_id: eachPlatformProduk.platform_id,
        unit_terjual: eachPlatformProduk.unit_terjual,
        pendapatan: eachPlatformProduk.pendapatan,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('platform_produks', dataPlatformProdukToBeSeeded, {});
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
