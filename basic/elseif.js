const n = 15;
if (n % 3 === 0){

    console.log('n은 3의 배수');
}else if (n % 5 ===0){

    console.log('n은 5의 배수');
}else{
    console.log('n은 3의 배수도 아니고 5의 배수도 아님');
}


if (n % 3 === 0 && n % 5 === 0){
    console.log('n은 15의 배수');
}else if (n % 3 === 0){
    console.log('n은 3의 배수');
}else if (n % 5 === 0){
    console.log('n은 5의 배수');
} else{
    console.log('n은 3의 배수도아니고 5의 배수도 아님');
}


const multipleOfThree = n % 3 === 0;
const multipleOfFive = n % 5 === 0;
if (multipleOfThree && multipleOfFive){
    console.log('n은 15의 배수');
}else if (multipleOfThree){
    console.log('n은 3의 배수');
}else if (multipleOfFive){
    console.log('n은 5의 배수');
} else{
    console.log('n은 3의 배수도아니고 5의 배수도 아님');
}

//중첩
if (multipleOfThree && multipleOfFive){
    console.log('n은 15의 배수');
}else{
    if (multipleOfThree){
        console.log('n은 3의 배수');
    }else if (multipleOfFive){
    console.log('n은 5의 배수');
} else{
    console.log('n은 3의 배수도아니고 5의 배수도 아님');
}
