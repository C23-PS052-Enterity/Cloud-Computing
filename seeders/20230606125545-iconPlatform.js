'use strict';
const iconPlatform = require('../data/platform.json');

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

    const dataIconPlatform = iconPlatform.map((eachIconPlatform) => {
      return {
        url_platform: eachIconPlatform.url_platform,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert('iconPlatforms', dataIconPlatform, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('iconPlatforms', null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
