export default (sequelize, Sequelize) => {

  const Catalog = sequelize.define("catalog", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.DOUBLE
    },
    rate: {
      type: Sequelize.DOUBLE
    },
    type: {
      type: Sequelize.STRING
    },
    weight: {
      type: Sequelize.INTEGER
    },
    height: {
      type: Sequelize.INTEGER
    },
    width: {
      type: Sequelize.INTEGER
    }
  });

  return Catalog;
}