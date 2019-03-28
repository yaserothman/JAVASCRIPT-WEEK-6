//0 STPE//
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000)

// 1 STEP//

function foo(func) {
    // What to do here?
    func();
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);

//2 STPE//


function homework(para1, para2, call1, call2) {
    let myArr = [];
    for (let i = para1; i <= para2; i++) {
        myArr.push(i);
        if (i % 3 == 0) {
            call1();
        }
        if (i % 5 == 0) {
            call2();
        }


    }
    console.log(myArr);
    return myArr;
};



function myFunction_1() {
    console.log("FIRST FUNCTION")
}

function myFunction_2() {
    console.log("SECOND FUNCTION")
}

homework(10, 15, myFunction_1, myFunction_2);

//3 STEP//

function repeatStringNumTimes(string, times) {

    var repeatedString = "";


    while (times > 0) {
        repeatedString += string;
        times--;
    }

    return repeatedString;
}

repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes);

//STEP 5//

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (var x = 0; x < arr[i].length; x++)
            console.log(product *= arr[i][x]);
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//STEP 6//

let myNestedArr = [
    [
        10, 11, 12, 13, 14, 15, [true, false, true, false, 30]
    ]
];
console.log(myNestedArr);

//STEP 7//

let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
// here we declare the variable (y) as the object 
// and inside the object, we find variable (x) the 
//variable has to value  (9)
function f2(val) {
    val.x = val.x + 1;
    return val;
    //here we have a function and the  func has argument
    //and inside the  
}
f2(y);
console.log(y);

//STEP 8//

function createBase(x) {
    return function (y) {
        return x + y;
    }
}


let addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27


//STEP 9//
let string = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function unique(callArray) {
    return callArray.reduce(function (previous, lett) {

        if (previous.find(function (i) {
            return i == lett;
        })) {
            return previous;
        } else {
            previous.push(lett);
            return previous;
        }
    }, [])
}

let check = unique(string);
console.log(check);