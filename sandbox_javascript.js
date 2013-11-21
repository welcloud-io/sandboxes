var assert = require('assert');
assert.equal(1, 1)

// A Class
console.log("-- aClass")

var aClass = function(aParam) {

  this.aParam = aParam;
	
  //~ this.aMethod = function() {
    //~ console.log("aMethod called, param is : " + this.aParam)
    //~ return this.aParam;
 //~ }
 
};

console.log(aClass.prototype)

//~ aClass.prototype.aMethod = function() { // Equivalent � declarer la m�thode dans la classe directement (voir au dessus)
  //~ console.log("aMethod called, param is : " + this.aParam)
  //~ return this.aParam;
//~ }
 
aClass.prototype = {
	
  aMethod : function() { // Permet de cr�er une liste de fonction
    console.log("aMethod called, param is : " + this.aParam)
    return this.aParam;
 },
 
}


console.log(aClass.prototype)
 
anObject = new aClass(1);
assert.equal(1, anObject.aMethod());

// Another Class
console.log("-- anotherClass")
 
var anotherClass = function(param) { // extends aClass
	
  aClass.call(this, param); // ==> H�ritage du constructeur
	
  this.anotherMethod = function() {
    console.log("anotherMethod called")
  }
 
};

// H�ritage des m�thodes
console.log(anotherClass.prototype)

for(key in aClass.prototype) {

  anotherClass.prototype[key] = aClass.prototype[key];

}

console.log(anotherClass.prototype)

anotherObject = new anotherClass(2);
anotherObject.aMethod();
anotherObject.anotherMethod();