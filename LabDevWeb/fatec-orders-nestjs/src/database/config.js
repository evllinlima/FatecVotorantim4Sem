//aqui é onde configura o banco de dados que será usado
module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
};
