// Immediately Invoked function Expression (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
    
})();

((name) => {
    console.log(`DB TWO CONNECTED ${name}`);
    
})("aaryan")