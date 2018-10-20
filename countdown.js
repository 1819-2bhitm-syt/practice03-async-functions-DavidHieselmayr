let counter = 10;
let logTick = true;
let ticker = setInterval(() => {
        console.log(counter--);
},1000);
setTimeout(() =>{
    clearInterval(ticker);
},counter * 1000 + 100);