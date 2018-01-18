const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];
var newArray = kittens;

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  newArray.push(name);
  return newArray;
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){}