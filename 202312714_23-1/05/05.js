const answer1 = '1. 이벤트 이름과 이벤트 발생 시의 콜백을 연결하기 위해 on(이벤트명, 콜백)을 사용합니다.\n';
const answer2 = '2. on과 동일한 기능을 하는 addListener 함수 입니다.\n';
const answer3 = '3. once는 단 한번만 호출할 수 있는 이벤트입니다.\n';

const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.on('event1', () => {
  console.log(answer1);
});
myEvent.once('event2', () => {
  console.log(answer3);
});
myEvent.addListener('event3', () => {
  console.log(answer2);
});

console.log('이벤트 호출을 시작해보겠습니다.\n 이벤트 모듈을 require(\'events\')로 가져옵니다.');
console.log('그리고 myEvent라는 객체를 생성합니다. 해당 객체 내부에는 이벤트 관리를 위한 메서드를 가지고 있습니다.\n\n');
console.log('각 메서드에 대한 설명입니다.\n');
myEvent.emit('event1');
console.log('다음 이벤트를 호출해 보겠습니다. 아직 addListener 이벤트를 호출하기 이전입니다.\n');
myEvent.emit('event2');
console.log('마지막 이벤트 호출입니다. 이벤트 호출은 이벤트.emit(이벤트명)입니다.\n');
myEvent.emit('event3');