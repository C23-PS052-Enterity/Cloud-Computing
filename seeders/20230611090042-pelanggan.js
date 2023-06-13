'use strict';

const pelanggan = require('../data/pelanggan.json');
const { v4: uuid } = require('uuid');
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
      const pelangganId = `pelanggan-${uuid()}`;
      return {
        id: pelangganId,
        url_pelanggan: eachPelanggan.url_pelanggan,
        nama_pelanggan: eachPelanggan.nama_pelanggan,
        jenis_kelamin: eachPelanggan.jenis_kelamin,
        email: eachPelanggan.email,
        no_telepon: eachPelanggan.no_telepon,
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
