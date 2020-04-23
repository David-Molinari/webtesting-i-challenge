module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newItem1 = item;
  if(item.enhancement != 20) {
    return {...newItem1, enhancement: newItem1.enhancement +1};
  } else {
    return item;
  }
}

function fail(item) {
  const newItem2 = item;
  if (item.enhancement < 15){
    return {...newItem2, durability: newItem2.durability - 5};
  } else if (item.enhancement == 15) {
    return {...newItem2, durability: newItem2.durability - 10};
  } else {
    return {...newItem2, durability: newItem2.durability - 10, enhancement: newItem2.enhancement - 1};
  }
}

function repair(item) {
  const newItem3 = item;
  return {...newItem3, durability: 100};
}

function get(item) {
  newItem4 = item;
  if (newItem4.enhancement == 0) {
    return newItem4;
  } else {
    return {...newItem4, name: `[+${newItem4.enhancement}] ${newItem4.name}`};
  }
}