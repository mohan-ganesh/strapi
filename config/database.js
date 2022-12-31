module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    debug: true,
    acquireConnectionTimeout: 1000000,
    options: {
      pool: {
        min: 1,
        max: 10,
        acquireTimeoutMillis: 900000,
        createTimeoutMillis: 900000,
        destroyTimeoutMillis: 900000,
      },
    },
  },
});
