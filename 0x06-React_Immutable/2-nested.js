#!/usr/bin/node
import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  let immutableObj = Immutable.fromJS(object);
  return immutableObj.getIn(array);
}

let obj = {
  name: {
	first: "Guillaume",
	last: "Salva",
  },
};

let value = accessImmutableObject(obj, ["name", "first"]);

console.log(value);