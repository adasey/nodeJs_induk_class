# Node.js 연습 Repository

## 1주차
- 개발환경 : Visual Studio Code
- 형상관리툴 : Github
- 개발언어 : Node.js, Javascript


### 진행상황
- 간단한 환경 설정만 진행, 협업 서비스 Slack 워크스페이스 가입하고 Git Repository 링크 보내기. Git의 기능에 대해 설명
- 앞으로는 Slack을 통해 메시지를 전달

## 2주차
- node.js : 스크립트 언어로 별도의 컴파일, 인터프리터의 과정없이 브라우저를 통해 바로 사용가능한 간편하고 사용자 친화적인 언어이다. Chrome V8 Javascript 엔진으로 빌드된 자바스크립트 런타임입니다.

## 3주차
- ES2015 : var 변수 선언에 const와 let이 추가됨
    - const : 상수이며 선언된 범위 외에서는 사용할 수 없음
    - let : 마찬가지로 범위 외에서는 사용할 수 없지만 값은 변경할 수 있음
- 문자열과 수를 더하면 전부 문자열로 변경됨
- ` (백틱)을 사용하면 ${} 내부 안에 변수를 넣을 수 있음 python의 f"{}"와 비슷함
- 객체 리터럴 : 객체 내부에 키 - 값 으로 함수를 선언할 수 있고 객체[키] = 값 처럼 객체에 값을 추가할 수 있는게 ES5 동적 사용 -> ES2015가 되면서 Const 선언에 객체를 넣어서 선언해 정적 사용 가능, 단 []를 통해 키 값을 정하면 값을 변경할 수 있음
- 화살표 함수 : 클로져로 변수에 함수를 선언할 수 있는 규칙을 통해 간략화된 익명 함수를 선언해 넣는 방식 (x) => {return x} -> x => x
- 구조분해 할당 : 객체의 값부터 함수를 선택적으로 가져옴으로써 메모리를 절약할 수 있음, 코드도 짧아지게 됨
- 클래스 : 자바의 클래스와 같은 기능이 가능하도록 funtion과 prototype, apply를 활용하는 것들을 묶어 class로 구현해 제공
- 프로미스 : 콜백을 사용하면 지저분하지만 프로미스의 resolve와 reject를 활용해 .then과 catch로 실행 가능 중첩이 가능해 .then과 .resolve를 계속 중첩할 수 있다.
    - 프로미스 all을 통해 여러 프로미스를 동시에 시행하나 하나라도 실패하면 바로 catch로 넘어간다. 이를 방지하기 위해 allsettled를 사용하면 된다.
- async/await : 비동기시 await을 통해 값이 넘어와 입력되기까지 기다린다.
- map과 set 사용가능 : 일반적인 map과 set과 동일
- null, undefined : ?? || 연산자를 통해 사용 가능
- Ajax : 서버로 요청을 보내는 비동기식 코드

# 4주차
- REPL 콘솔 제공 : python처럼 콘솔에서 즉시 코드 실행 가능
- 모듈 : require를 통해 다른 js 파일의 변수를 가져올 수 있음 import가 ECMAScript에서 추가되어 import를 통해 mjs, module 타입 내부의 값을 가져올 수 있게 됨
- dynamic import : require() 과 import()를 통해 동적 import 가능
- global : 브라우저의 window와 같음. 생략이 가능하며 모든 파일에서 접근 가능
global 속성에 값을 대입하면 다른 파일에서도 해당 변수 사용가능
- console : 콘솔에 로깅을 위한 함수, 여러 기능을 가지고 있음 java의 sl4j과 같음
- 타이머 메서드 : 콜백 함수를 실행하는 타이머 함수, 참고 : 인터프리터 언어이기 때문에 전부 읽고 나서 실행하므로 setImmediate를 작성하고 바로 clearImmediate를 작성해두면 즉시 실행하는 작업을 하지 않고 queue에서 바로 사라진다.
- process : 실행 중인 노드 프로세스에 대한 정보를 담음, 시스템 환경 변수들을 담는 객체로 비밀키 : API키 등을 활용할 때 사용 또는 프로세스 실행의 환경에 대한 설정을 하기도 함
- os : require를 사용해 불러오며 경로 설정 없이 바로 사용 가능
- path : 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
- url : 인터넷 주소를 쉽게 조작하도록 도우는 모듈로 요즘엔 WHATWG 방식을 사용
- 단방향 암호화 : 암호화는 가능하나 복호화는 불가능한 것을 사용 대표로는 해시 기법이 있으며 고정된 해시의 문자열이 반환됨
- 양방향 암호화 : 대칭형 암호화 key가 사용됨 암호화 시 복호화 할 때와 같은 key를 사용해야함
- util : 각종 편의 기능을 모아둔 모듈로 deprecated, promisify가 사용됨

# 5주차
- worker_threads : 멀티 스레드 방식 작업 가능. 소수찾기 알고리즘을 통해 기존과 멀티 스레드 방식의 속도 비교
- child_process : 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용
- fs : 파일 시스템에 접근하는 모듈
- 버퍼와 스트림을 통해 데이터 전송
    - 버퍼 : 일정한 크기로 모아두는 데이터 지속적으로 일정한 크기가 되면 처리
    - 스트림 : 데이터의 흐름으로 일정한 크기로 나눠 여러 번에 걸쳐 처리
- 큰 파일 생성 시 : createWriteStream을 활용해 만들어야 메모리 문제가 생기지 않음
- 이벤트 호출 : events 모듈로 커스텀 이벤트를 만들 수 있음
- 예외처리 : try {} catch {}

서버와 클라이언트
- 클라이언트 : 특정한 위치로 요청을 보내고 응답을 받음
- 서버 : 특정한 요청을 처리하고 응답을 보냄 (HTTP 응답과 WAS 동적 서버단)
- 노드는 클라이언트단과 서버단 전부 사용 가능하며 일반적인 서버 없이 즉시 서버를 실행할 수 있다. HTTP 모듈을 사용함
- on과 addListener는 같다
- HTTP 응답 코드 100 ~ 500번대
- HTTP 메소드 GET, POST, PUT, PATCH, DELETE, STATUS