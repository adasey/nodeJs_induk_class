function first() {
    second();
    console.log("첫번째 실행");
}
function second() {
    console.log("두번째 실행");
    third();
    console.log("네번째 실행");
}
function third() {
    console.log("세번째 실행");
}
first();

// 호출한 함수를 호출 스택으로 넣고 실행함 - 맨위부터 실행