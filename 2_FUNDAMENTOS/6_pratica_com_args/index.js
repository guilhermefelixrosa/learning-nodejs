//Módulo externo
const minimist = require("minimist");
//Módulo interno
const soma = require("./soma").soma;

const args = minimist(process.argv.slice(2));

console.log(args)

const a = args['a']
const b = args['b']

soma(a, b);
