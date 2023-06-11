'use strict';

const pelanggan = require('../data/pelanggan.json');

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

    const dataPelangganToBeSeeded = pelanggan.map((eachPelanggan) => {
      return {
        url_pelanggan: eachPelanggan.url_pelanggan,
        nama_pelanggan: eachPelanggan.nama_pelanggan,
        jenis_kelamin: eachPelanggan.jenis_kelamin,
        email: eachPelanggan.email,
        not_telepon: eachPelanggan.not_telepon,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('pelanggans', dataPelangganToBeSeeded, {});
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
