var program = require('commander');
var TemplateEngine = require('./TemplateEngine');
var JSONSourceParser = require('./JSONSourceParser');

program
  .version('0.1.0')
  .option('-g, --generate', 'Start generation')
  .option('-s, --source [type]', 'Add path of source file')
  .parse(process.argv);

console.log('you start generation with with:');
console.log('  - %s file', program.source);

if (program.generate)
{
  var fs = require('fs');
  var jsonSource = JSON.parse(fs.readFileSync(program.source, 'utf8'));




  var template =
  'pragma solidity ^0.4.0; \n'+
  'contract <%this.contractName%> {'+
    'enum States { '+
      '<%for(var index in this.states) {%>' +
        '<%if(index!=0){%>,<%}%>' +
        '<%this.states[index]%>' +
      '<%}%>' +
      '}' +
    '}';

    sourceParser = new JSONSourceParser(jsonSource);
    var solidityCode = TemplateEngine(template, sourceParser.result());

    console.log(solidityCode);

    var fs = require('fs');
    var fileContent = solidityCode;

    fs.writeFile("./youSmartContract.solc", fileContent, (err) => {
      if (err) {
          console.error(err);
          return;
      };
      console.log("Solidity class has been created");
    });
}
