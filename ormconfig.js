// ormconfig.js
module.exports = {
    type: "mysql",
    port: 3306,
    host: "185.78.164.113",
    username: "wipresou_vehicles",
    password: "1ega5jVbSt",
    database: "wipresou_vehicles",
    logging: false,
    entities: [
      "modules/*/entity.ts",
      "modules/*/entity-*.ts"
    ],
    migrations: ["migration/*.ts"],
    cli: {
      migrationsDir: "migration",
    },
  }