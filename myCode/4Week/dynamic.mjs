const a = true;
// if (a) {
//     import '../4Week/module/func.mjs';
// }
// if (a) {
//     require('../4Week/module/func.mjs');
// }

if (a) {
    const m1 = await import('../4Week/module/func.mjs');
    console.log(m1);
    const m2 = await import('../4Week/module/var.mjs');
    console.log(m2);
}

console.log('성공');