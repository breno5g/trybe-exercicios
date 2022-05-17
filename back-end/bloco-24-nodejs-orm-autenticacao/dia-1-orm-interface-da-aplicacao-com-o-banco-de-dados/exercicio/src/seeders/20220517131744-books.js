'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'A careca ressurge',
        author: 'Pedro',
        page_quantity: 89,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'O plano dos carecas',
        author: 'Pedro',
        page_quantity: 89,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'É dos carecas que elas gostam',
        author: 'Pedro',
        page_quantity: 89,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
