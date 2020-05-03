// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: '32775',
      database: 'simple-chords-dev',
      user: 'root',
      password: '1234',
    },
    migrations: {
      extension: 'ts',
      directory: './db/migrations'
    }
  }
};
