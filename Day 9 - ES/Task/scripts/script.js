function task1(){
    console.log("*---- Task 1 ----*");
    var x = 5;
    var y = 10;
    console.log(`[before swap] x is: ${x}, y is: ${y}`);
    [x,y]=[y,x];
    console.log(`[after swap] x is: ${x}, y is: ${y}`);
}

function findMaxMin(...x){ //using rest
    const maxResult = Math.max(...x);//using spread
    const minResult = Math.min(...x);//using spread
    return [maxResult, minResult];
}

function task2(){
    console.log("*---- Task 2 ----*");
    var arr = [5,6,7,8,6,1,9];
    const [max, min] = findMaxMin(...arr); //using spread
    console.log(`max value: ${max}`)
    console.log(`min value: ${min}`)
}

// task2();

function task3(){
    console.log("*---- Task 3 ----*");

    var fruits = ["apple", "strawberry", "banana", "orange","mango"];
    // console.log(fruits.find(num=>num==5));
    console.log(`All fruits are string?: ${fruits.every(fruit => typeof fruit === "string")}`);
    console.log(`Some fruits start with a?: ${fruits.some(fruit=>fruit.startsWith("a"))}`)
    
    const fruitsB_S = fruits.filter(fruit=>fruit.startsWith("b") || fruit.startsWith("s"))
    console.log(`fruits that start with b and s: ${fruitsB_S}`);
    
    const newFruitArray = fruits.map(fruit=>`I love ${fruit}`);
    // console.log(newFruitArray);
    
    newFruitArray.forEach(fruit=>console.log(fruit))
}


