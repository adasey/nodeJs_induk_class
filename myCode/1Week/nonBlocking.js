function longTask1() {
    console.log("1st task end");
}
function longTask2() {
    console.log("2nd task end");
}
console.log("start");
setTimeout(longTask2, 0);
longTask1();
console.log("next work");