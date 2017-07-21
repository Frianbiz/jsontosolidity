// Constructor
function JSONSourceParser(source) {
  this.source = source;
}

JSONSourceParser.prototype.result = function() {
  var formatedDict = {};
  formatedDict['states'] = this.states();
  formatedDict['contractName'] = this.source["contractName"];
  console.log(formatedDict);
  return formatedDict;
}

// class methods
JSONSourceParser.prototype.states = function() {
  var uniqueStates = [];
  for(var transition in this.source["transitions"]){
    this.uniquePush(uniqueStates, this.source["transitions"][transition].from);
    this.uniquePush(uniqueStates, this.source["transitions"][transition].to);
  }
  return uniqueStates;
};

JSONSourceParser.prototype.uniquePush = function(arr, item) {
  if (arr.indexOf(item) == -1) {
    arr.push(item);
  }
};
// export the class
module.exports = JSONSourceParser;
