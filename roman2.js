const program = require('commander');
const echoRoman = require('./controller/convert.js').echoRoman;

program
  .version('0.0.1')
  .description('Arabic to Roman converter');

program
  .command('roman2 <arabic_number>')
  .description('Convert arabic number to roman')
  .action((var1) => {
	echoRoman(var1);
  })

program.parse(process.argv);