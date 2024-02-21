#!/usr/bin/node
const Immutable = require('immutable');

function getImmutableObject(obj) {
  return Immutable.fromJS(obj);
}

let obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

let immutableObj = getImmutableObject(obj);

console.log(immutableObj);