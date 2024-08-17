function* fibonacciGenerator(n, a = 0, b = 1) {
    if (n > 0) {
        yield a;
        yield* fibonacciGenerator(n - 1, b, a + b);
    }
}

function fibo1(){
    let iter1 = fibonacciGenerator(document.getElementById("text1").value);
    var counter = 0;
    console.log("*---First Fibonnaci implementation---*")
    for (let num of iter1) {
        console.log(`Index: ${counter} Element: ${num}`);
        counter++;
    }
    
}

function* fibonacciMax(max, a = 0, b = 1) {
    if (a <= max) {
        yield a;
        yield* fibonacciMax(max, b, a + b);
    }
}

function fibo2(){
    let iter2 = fibonacciMax(document.getElementById("text2").value);
    var maxCounter = 0;
    console.log("*---Second Fibonnaci implementation---*")
    for (let num of iter2) {
        console.log(`Index: ${maxCounter} Element: ${num}`);
        maxCounter++;
    }
    
}