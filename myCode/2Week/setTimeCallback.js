function run() {
    console.log("3 sec delay...");
}
console.log("start");
setTimeout(run, 3000); // 비동기 함수
console.log("end");