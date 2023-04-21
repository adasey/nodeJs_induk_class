const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const ANSWER = '콜백 핸들러로 전달되는 인수는 자바스크립트의 1급 함수, 1급 객체의 특징을 활용한 함수를 인수로 전달하는 것으로 해당 익명 함수를 끝나기까지 기다리지 않고 다른 추가적인 작업도 진행하기 위해'
+ '사용하는 것입니다. \n 콜백 지옥이란 비동기 처리를 위해 콜백 함수를 연속적으로 활용하는 문제를 뜻합니다. 콜백 함수의 인수 안에 또다른 콜백 함수를 넣고, 그안에 또 넣는 방식으로 중첩된 콜백 함수 호출을 '
+ '의미합니다. \n 이를 해결하기 위해 등장한 것이 promise 기반입니다. 프로미스 객체를 생성하고 resolve와 reject 매개변수를 갖는 콜백 함수를 넣어 해당 함수가 함수에 대한 실행은 미리 하고 결과를 나중에 받는'
+ ' 방식입니다. 콜백 함수를 중첩하는 대신 then 부분에 콜백 함수를 작성하면 중첩된 콜백 함수가 아닌 각자 then과 catch로 나뉘어지게 됩니다. \n';

console.log(ANSWER);

const rl = readline.createInterface({ input, output });

rl.question('t, f를 입력해 결과를 확인하세요', (answer) => {
    const promise = new Promise((resolve, reject) => {
    if (answer == 't') {
        resolve('콜백 함수 실행하기');
    } else {
        reject('실패');
    }
    });
    // 다른 코드가 들어갈 수 있음
    promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
        setTimeout(run, 2000); // 비동기 함수
        console.log("끝..");
    })
    .catch((error) => {
        console.error(error); // 실패(reject)한 경우 실행
    })
    .finally(() => { // 끝나고 무조건 실행
        console.log('t를 입력하면 결과를 볼 수 있어요');
    });

    function run() {
        console.log("2 sec delay...");
    }

    rl.close();
});