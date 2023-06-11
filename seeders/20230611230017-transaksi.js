'use strict';

const transaksi = require('../data/transaksi.json');

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

    const dataTransaksiToBeSeeded = transaksi.map((eachTransaksi) => {
      return {
        platform_produk_id: eachTransaksi.platform_produk_id,
        pelanggan_id: eachTransaksi.pelanggan_id,
        harga_total_pembelian: eachTransaksi.harga_total_pembelian,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('transaksis', dataTransaksiToBeSeeded, {});
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
