//switch뒤 괄호안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교에서 실행
//이중에 defalt:뒤에 있는 문장은 항상 참이어서 실행되는 블럭이다.
//문장이 한줄이라 중괄호는 생략함

let n = 5;
switch(n){ //n이 뭐든 defalt에 닿으면 참이됨
    default:
        console.log(n);
}

//n을 5로 나누었을 때 나머지가 0인 경우에 실행되는 블럭을 추가한 것
//case '비교할 값' : 을 이용해서 맞으면 실행된다.
//case 0:인 경우와 default:인 경우 두 블럭 모두 순서대로 실행된다
switch(n % 5){
    case 0:{
        console.log('5의 배수입니다.');
        break;
    }
    default:
        console.log(n);
}



n = 6;

switch(n % 5){
    case 0:{
        console.log('5의 배수입니다.');
        break;
    }
    case 1:
    case 2:
    case 3:
    case 4:
         console.log('5의 배수가 아닙니다');
    default:
        console.log(n);
}

