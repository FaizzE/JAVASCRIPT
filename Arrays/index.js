console.log('Arrays - >');

let numbers = [1,2,3,4,5];

console.log(numbers);

// end -> push()
// add element in arrays beginning -> unshift()
// add element in array in middle -> splice()

// Searching 

console.log(numbers);

console.log(numbers.indexOf(9));

// check if a number exist in array or Not

if(numbers.indexOf(10) != -1);
console.log("Present");

// Search Element through Best Practice
console.log(numbers.includes(4));

console.log(numbers.indexOf(4,2));

let courses =  [
    {no:1, naame:'JavaScript'},
    {no:2, naame:'Faiz'}
];

console.log(courses);

// console.log(courses.indexOf({no:1,naame:'JavaScript'}));

// let course =  courses.find(function(course){
//     return course.naame == 'JavaScript';
// })

// console.log(course);

let course = courses.find(function(course){
    return course.naame === 'JavaScript';
});

console.log(course);