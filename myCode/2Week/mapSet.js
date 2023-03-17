const m = new Map();

m.set("a", "b");
m.set(3, "c");
const d = {};
m.set(d, 'e');
const f = {}
m.set("g", f);

// console.log(m.size);

// for (const [k, v] of m) {
//     console.log(k, v);
// }

// m.forEach((k, v) => {
//     console.log(k, v);
// })

const s = new Set();
s.add(false);
s.add(1);
s.add('1');
s.add(1);
s.add(2);

console.log(s);

console.log(s.has(1));