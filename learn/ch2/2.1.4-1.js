function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
  return !x;
}

const not2 = x => !x;

console.log(
  add1(1, 1),
  add2(1, 2),
  add3(1, 3),
  add4(1, 4),
  not1(''),
  not1(null),
  not2(0),
  not2('a')
  );