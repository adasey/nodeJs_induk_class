var Apes = function(type) {
  this.type = type || 'human';
};

Apes.isHuman = function(apes) {
  return apes instanceof Apes;
}

Apes.prototype.breathe = function() {
  alert('h-a-a-a-m');
};

var Human = function(type, firstName, lastName) {
  Apes.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};

Human.prototype = Object.create(Apes.prototype);
Human.prototype.constructor = Human; // 상속하는 부분
Human.prototype.sayName = function() {
  alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Human('human', 'Zero', 'Cho');
console.log(Apes.isHuman(oldZero)); // true
