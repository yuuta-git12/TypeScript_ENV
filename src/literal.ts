const binary = 0b1010;
const octal = 0o755;
const hexadecimal = 0xff;

console.log(binary, octal, hexadecimal);

const big = 1e8; //10^8乗
const small = 4e-5; //4*10^-5乗

console.log(big,small);

const bignum: bigint = (123n + 456n)*2n;
console.log(bignum);

const result = 5n/2n;
console.log(result);