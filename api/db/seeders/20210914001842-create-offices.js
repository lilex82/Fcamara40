'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Offices', [{
      name: 'SP',
      max_capacity: 240,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "SANTOS",
      max_capacity: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /*Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('Offices', null, {});
  }
};

