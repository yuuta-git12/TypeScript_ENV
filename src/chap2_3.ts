import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('文字列または数字を入力してください：',(line) => {
    console.log(`${line + 1000}が入力されました。`);

    const num:number = Number(line);
    console.log(`計算結果は${num + 1000}です。`);

    const bigint1:bigint = BigInt(line);
    console.log(bigint1);
    console.log(`BigInt型では${bigint1}です。`);

    rl.close();
});