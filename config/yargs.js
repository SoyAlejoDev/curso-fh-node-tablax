const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "es la base de la table de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: " muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    describe: " determina la cantidad de numeros a multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser numero";
    }
    return true;
  }).argv;

module.exports = argv;
