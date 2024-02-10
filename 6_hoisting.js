/**
 * hoisting이란?
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

console.log('Hello');
console.log('World');
console.log('-----------------'); //당연히 순서대로 Hello와 World가 순처적으로 찍힌다.

console.log(name); //name을 선언 전에 찍으면 Error가 나야 하지만 undefined로 찍힌다.
var name = 'damwon'
console.log(name); // 정상적으로 찍힌다.

//이렇게 생각하면 됨
var sm; //값을 설정하지 않았으므로 undefined
console.log(sm); // undefined로 출력
sm = '상민'
console.log(sm); // 상민이 찍힘
console.log('-----------------');

// var로 할당된 변수는 Hoisting을 막아주지 못하지만 let, const로 선언된것은 Hoisting을 방지해 준다.

// console.log(smp); //Cannot access 'smp' before initialization
// let smp = '상민쨩'
// console.log('-----------------');

console.log(dwbc);
const dwbc = '담원' //Cannot access 'dwbc' before initialization