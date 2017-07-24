
# Work in progress!
The purpose of this lib is to generate Solidity SmartContract from a State Machine JSON description

## Describe state Machine of your smartcontract in your JSONSource.json file
```sh
{
"contractName":"Campaign",
"init":"inprogress",
"transitions":[
    {"name":"contribute", "from":"inprogress", "to":"success"},
    {"name":"contribute", "from":"inprogress", "to":"fail"},
    {"name":"canceled", "from":"inprogress", "to":"fail"}
  ]
}
```

## Run this cmd to generate smartContract with standard state Machine Solidity Implementation
```sh
run node solidityGenerator.js --generate --source [absolute path of JSONSource.json]
```

## Test the generated smartContract !
A file (contractName.solc) is generated at the root of the project
```sh
pragma solidity ^0.4.0; 
contract Campaign {

    enum States { inprogress,success,fail}
    
    modifier atStage(Stages _expectedStage) {
    // if the current state does not equal the expected one, throw
    if (stage() != uint256(_expectedStage)) {
      throw;
    } else {
      // continue with state changing operations
      _;
    }
  }
}
```
