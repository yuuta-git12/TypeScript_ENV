/** 
 * 0~6をコンソールに表示する処理
*/

function promiseFactoryCount(count:number) {
    return new Promise<number>(resolve => {
        setTimeout(()=>{
            console.log(count);
            count += 2;

            if(count <= 6){
                resolve(count);
            }
        },1000);
    });
}

promiseFactoryCount(0)
.then(count => {return promiseFactoryCount(count)})
.then(count => {return promiseFactoryCount(count)})
.then(count => {return promiseFactoryCount(count)})
.finally(()=>{
    console.log("処理を終了します。");
})