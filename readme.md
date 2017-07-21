
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
