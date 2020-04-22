module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement != 20) {
    const updatedItem1 = {name: 'a', durability: 0, enhancement: 1};
    return updatedItem1;
  } else {
    return item;
  }
}

function fail(item) {
  if (item.enhancement < 15){
    const updatedItem2 = {name: 'a', durability: 5, enhancement: 10};
    return updatedItem2;
  } else if (item.enhancement == 15) {
    const updatedItem3 = {name: 'a', durability: 5, enhancement: 15};
    return updatedItem3;
  } else {
    const updatedItem4 = {name: 'a', durability: 5, enhancement: 17};
    return updatedItem4;
  }
}

function repair(item) {
  const updatedItem5 = {name: 'a', durability: 100, enhancement: 0};
  return updatedItem5;
}

function get(item) {
  if (item.enhancement == 0) {
    return item;
  } else {
    const updatedItem6 = {name: 'a', durability: 5, enhancement: 17};
    return updatedItem6;
  }
}