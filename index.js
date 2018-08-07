var recipes = {
  bread: '2 slices',
  peanutButter: '1/4 cup',
  jam: '1/4 cup'
};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}


