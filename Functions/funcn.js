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

/* ======================= rest operator ===================== */

function summ(...args){
    console.log(args);
}

// sum();
function addn(num,val,...args){ // rest parameter
    console.log(args);
}

// addn(1,2,3,4,5,6);


/* ======================== Default Parameter ================== */

function interest(p,r=6,y=9){
    return p*r*y/100;
}

// console.log(interest(1000,undefined,8));


/* ==================== GETTER , SETTER ======================= */

// Getter -> for access properties
// Setter -> for change or mutate properties
let person = {
    fName : 'Faizul',
    lName : 'Islam',

    get fullName() {
        return `${person.fName}  ${person.lName}`;
    },

    set fullName(value) {
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// console.log(person);

person.fullName = 'Faiz Arshad';
console.log(person.fullName);
