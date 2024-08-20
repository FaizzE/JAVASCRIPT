console.log('Functions -> ')


// run();
function run() {
    console.log('running');
}

// run();

// work();

// Named function Assignment
let work = function walk() {
    console.log('work');
};


// Anonymous function assignment
let stand = function() {
    console.log('working');
};

// work();

let jump = stand;

// jump();

// stand();

function sum(a,b) {
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total;
}

// console.log(sum());

let ans = sum(1,2,3,4,5,6);
// console.log(ans); 

function addn(num,val,...args){ // rest parameter
    console.log(args);
}

// addn(1,2,3,4,5,6);

/* =================== Default Parameter */
function interest(p,r=6,y=9){
    return p*r*y/100;
}

// console.log(interest(1000,undefined,8));