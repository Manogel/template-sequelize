module.exports = {
  dialect: process.env.DB_CONNECTION, // or 'postgres' and yarn add pg-hstore or https://sequelize.org/master/manual/dialects.html
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
