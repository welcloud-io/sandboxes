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

//~ aClass.prototype.aMethod = function() { // Equivalent à declarer la méthode dans la classe directement (voir au dessus)
  //~ console.log("aMethod called, param is : " + this.aParam)
  //~ return this.aParam;
//~ }
 
aClass.prototype = {
	
  aMethod : function() { // Permet de créer une liste de fonction
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
	
  aClass.call(this, param); // ==> Héritage du constructeur
	
  this.anotherMethod = function() {
    console.log("anotherMethod called")
  }
 
};

// Héritage des méthodes
console.log(anotherClass.prototype)

for(key in aClass.prototype) {

  anotherClass.prototype[key] = aClass.prototype[key];

}

console.log(anotherClass.prototype)

anotherObject = new anotherClass(2);
anotherObject.aMethod();
anotherObject.anotherMethod();