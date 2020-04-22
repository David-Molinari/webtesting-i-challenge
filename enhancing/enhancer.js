module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement != 20) {
    let updatedItem = {...item, enhancement: item.enhancement + 1}
    console.log(updatedItem);
    return updatedItem;
  } else {
    return item;
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
