module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define("contact", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    messsage: {
      type: Sequelize.STRING
    }
  });

  return Contact;
};
