function longTask(t) {
    console.log(t, "task end");
}
console.log("start");
setTimeout(longTask, 0, "NonBlocking");
longTask("Blocking");
console.log("next work");