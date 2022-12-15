module.exports = {
    up: async (queryInterface, Sequelize) =>
      /**
       * Add seed commands here.
       *
       * Example:
       * await queryInterface.bulkInsert('People', [{
       *   name: 'John Doe',
       *   isBetaMember: false
       * }], {});
       */
      queryInterface.bulkInsert('products', [
        {
          // productName: 'servicios extructurales',
          // price: 5000,
          // description: 'servicios para extructuras',
          // stock: 10,
          // img: '/img4.png',
          // createdAt: new Date(),
          // updatedAt: new Date(),
        }
      ]),
    down: async (queryInterface, Sequelize) =>
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
      queryInterface.bulkDelete('products', null, {})
    ,
  };