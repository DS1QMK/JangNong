/**
 * Variable 선언하기
 * 
 * 1) var - 더 이상 쓰지 않는다.
 * 2) let -
 * 3) const -
 * 
 */

var name = 'Damwon';
console.log(name);

var age = 50;
console.log(age);

let smpak = '박상민';
console.log(smpak);

/**
 * let과 var로 선언하면 값을 추후에 변경할 수 있다.
 */

smpak = '장농다리';
console.log(smpak);

const sm = '상민';
console.log(sm);
// const 키워드를 사용한 변수는 변경할 수 없음

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것
 * 
 */

var name; //변수를 선안
var name = '담원'; //값을 할당

let girlFriend;
console.log(girlFriend); //undefined로 출력된다.

// const 키워드는 값을 할당하며 선언이 되어야 한다.
// const girlFriende;



