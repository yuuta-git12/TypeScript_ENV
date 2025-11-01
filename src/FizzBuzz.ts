

function fizzBuzz(num: number): string {

    if(num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if(num % 3 === 0){
        return "Fizz";
    } else if(num % 5 === 0){
        return "Buzz";
    } else{
        return `${num}`;
    }
}

// 1行ずつ出力
function fizzBuzzOutput(){
    for(let i = 1; i<= 100; i++){
        console.log(fizzBuzz(i));
    }
}

// 配列に格納して出力
function fizzBuzzOutput2(){
    let result: string = "";
    for(let i = 1; i<= 100; i++){
        result += fizzBuzz(i) + " ";
    }
    console.log(result);
}

// fizzBuzzOutput2();

fizzBuzzOutput();