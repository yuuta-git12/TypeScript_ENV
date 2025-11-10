new Promise((resolve,reject) => {
    
    setTimeout(() => {
        const date: Date = new Date();
        const second: number = date.getSeconds();

        if(second % 2){
            reject(second);
        }else{
            resolve(second);
        }
    },1000);
}).then(second => {
    console.log(`${second}は偶数のため成功とします。`);
}).catch(second => {
    console.log(`${second}は奇数のため失敗とします。`);
}).finally(()=>{
    console.log("処理を終了します。");
})

