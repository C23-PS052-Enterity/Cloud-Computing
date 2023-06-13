'use strict';

const { hashPassword } = require('../helpers/bcrypt');
const user = require('../data/user.json');

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
    const dataUserToBeSeeded = user.map((eachUser) => {
      return {
        id: eachUser.id,
        nama_toko: eachUser.nama_toko,
        email: eachUser.email,
        password: hashPassword(eachUser.password),
        profile_picture: eachUser.profile_picture,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('Users', dataUserToBeSeeded, {});
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
