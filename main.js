const yargs = require('yargs');
 
const argv = yargs
  .option('value1', {
    describe: 'Esimene väärtus',
    demandOption: true,
    type: 'number'
  })
  .option('value2', {
    describe: 'Teine väärtus',
    demandOption: true,
    type: 'number'
  })
  .option('sign', {
    describe: 'Tehe (+, -, *, /)',
    demandOption: true,
    choices: ['+', '-', '*', '/']
  })
  .help()
  .argv;
 
const { value1, value2, sign } = argv;
 
let result;
 
if (sign === '+') {
  result = value1 + value2;
} else if (sign === '-') {
  result = value1 - value2;
} else if (sign === '*') {
  result = value1 * value2;
} else if (sign === '/') {
  result = value1 / value2;
} else {
  console.log('Vigane operaator');
  process.exit(1);
}
 
console.log(`${value1} ${sign} ${value2} = ${result}`);