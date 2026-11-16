// VARIABLE DECLARATIONS

// VAR 
// LET 
// COONST

let name = "Obi"

let myName = "Homie"

console.log(myName); //Homie

myName = "Divine"

console.log(myName); //Divine

let myAge = 16;

const myCourse = "Frontend Development"


//CASINS IN JAVASCRIPT

// uppercasing
// lowercasing
// camelcasing                  Examples: myName, myAge, theBoy
// PaschalCasing                Examples: TheBoy, HisName, HerName
// snake casing                 Examples: the_girl, her_name, her_age
// screming snake casing        Examples: THE_CONST_VAR, MY_COURSE





// VARIABLES AND VALUES

// STRING
let herCourse = "Graphics Design"; //Double quotes
let hisCourse = 'Mobile App Development'; //Single quotes
let yourGrade =  `16` //Template literal

let herEmailMesssage = `You have scored ${yourGrade} out of 20 in your test`;
console.log(herEmailMesssage);
console.log(herEmailMesssage.length);

// Numbers 
let solomonAge = 25;
solomonAge = 30;

let pi = 3.142;
let expo = 10e5;


// boolean 
const isSheAGirl = true;
const isSheMarried = false;

// NULL
let victorName = null;

//undefined
let yourClass;

console.log ("What is yourclass?", yourClass);

// Objects : Denoted with curly brackets 

let studentID = {
    age: 16,
    course: "Frontend",
    school: "0xVerse Academy" ,
    isEnrolled: true
}


// Arrays denoted with square brackets 

let myFruitesArray = [
    "Apple" ,
    "Oranges",
    "Mangoes"
];

let myMixedArray = [
    16,
    "20",
    "Apple",
    true,
    {name: "divine"},
    null
]

const findLength = myMixedArray.length;


console.log(findLength);

const findIndex = myMixedArray.indexOf("Apple")
console.log(findIndex);