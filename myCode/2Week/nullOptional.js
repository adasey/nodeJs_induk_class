const a = 0;
const b = a || 3;
console.log(b);

const c = 0;
const d = c ?? 3;
console.log(d);

const e = null || 3;
console.log(e);

const f = undefined ?? 3;
console.log(f);

const h = true || 3;
console.log(h);