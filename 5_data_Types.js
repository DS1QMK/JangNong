/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과 한개의 Object Type이 있다.
 * 
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) Undefined
 * 5) null
 * 6) Symbol
 * 7) Object
 *      - Function
 *      - Array
 *      - Object
 */

const age = 50;
const temparature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temparature);
console.log(typeof pi);
console.log('---------------------');

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof ninfinity);
console.log('---------------------');

// String Type

const Damwon = '담원'
console.log(Damwon);
console.log(typeof Damwon);

const dwbc = "'담원', '박상민'";
console.log(dwbc);
console.log('---------------------');

/**
 * Template Literal
 * 
 * Escape Character
 * 1) new line - \n
 * 2) tab = /t
 * 3) 백슬래시를 스트링으로 표현하고자 한다면 두번 입력하면 됨
 */
const IloveHeil = '혜일\n사랑'
const IloveSogogi = '맛있는\t소고기'
const BackSlash = '덤원\\박상민'

console.log(IloveHeil);
console.log(IloveSogogi);
console.log(BackSlash);

const dwbc2 = `박상민
담원`; //tab키 위의 작은 따옴표 사용하면 줄바꿈을 얻을 수 있다.
console.log(dwbc2)
console.log(typeof dwbc2)

const groupName = '박상민';
console.log(groupName + ' 장농다리');
console.log(`${groupName} 잘하자`); //tab키 위의 따옴표 사용
console.log('---------------------');

// Boolean Type
const isTrue = 'True';
const isFalse = 'False';
const isTrue1 = true;
const isFalse1 = false;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof isTrue1);
console.log(typeof isFalse1);
console.log('---------------------');

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때 지정된는 값이다.
 * 직접 undefined로 값을 초기화하는것은 지양해야한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log('---------------------');

/**
 * null Type
 * undefined와 마찬가지로 값이 없다는 의미
 * 개발자가 명시적으로 없는 값으로 초기화할때 사용
 */

let init = null;
console.log(init);
console.log(typeof init);
console.log('---------------------');

/**
 * Symbol Type
 * 
 * 유일무일한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2); //왼쪽의 값이 오른쪽과 동일한지 비교

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); //Symbol의 값은 유일무일한 값이라서 symbol1,2의 값은 같지 않다
console.log('---------------------');

/**
 * Object Type
 * 키:밸류 쌍으로 이루어져 있다.
 * Key:Value
 */

const dictionary = {
    red: '빨강색',
    Yellow: '노랑색',
    green: '녹색',
};

console.log(dictionary); // 전체 dictionary 출력
console.log(dictionary['red']); //red 키에 해당하는 값을 출력
console.log(typeof dictionary); // type이 Object로 나타나는 것을 확인할 수 있다.
console.log('---------------------');

/**
 * Array Type
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */

const smMembersArray = [
    '상민', // 0번 index
    '혜일', // 1번 index
    '길동', // 2번 index
    '춘향', // 3번 index
    '담원', // 4번 index
]

console.log(smMembersArray); // 항목이 하나씩 출력된다.
console.log(smMembersArray[0]); // 0번 index만 출력된다.
console.log(smMembersArray[4]); // 4번 index만 출력된다.

// 리스트의 값은 변경 가능하다
smMembersArray[0] = '원담'; //0번 리스트의 값을 원담으로 변경하였음
console.log(smMembersArray); // 전체 리스트를 출력해 보면 변경된 사항을 확인 가능
console.log(typeof smMembersArray); // Type이 object로 출력된 것을 확인 할 수 있다.