'use strict';
const produk = require('../data/produk.json');
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

    const dataProdukToBeSeeded = produk.map((eachProduk) => {
      return {
        id: eachProduk.id,
        url_produk: eachProduk.url_produk,
        nama_produk: eachProduk.nama_produk,
        stok: eachProduk.stok,
        harga_produk: eachProduk.harga_produk,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('produks', dataProdukToBeSeeded, {});
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
