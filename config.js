module.exports = {
  db: process.env.DOCKER ? 'mysql' : 'mysql_dev',

  mysql: {
    driver: 'mysql',
    param: {
      host: 'survey-mysql',
      port: 3306,
      user: 'survey',
      password: 'survey!4555',
      database: 'survey',
      supportBigNumber: true,
      timezone: '+7:00',
      dateStrings: true,
      charset: 'utf8mb4_unicode_ci',
    },
  },

  mysql_dev: {
    driver: 'mysql',
    param: {
      host: '10.0.1.182',
      port: 33002,
      user: 'survey',
      password: 'survey!4555',
      database: 'survey',
      supportBigNumber: true,
      timezone: '+7:00',
      dateStrings: true,
      charset: 'utf8mb4_unicode_ci',
    },
  },
}
