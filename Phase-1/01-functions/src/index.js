//What are variables and how do you define them?
//Containers that can hold all sorts of data types and values. 
//You can define variables using const or let.
const host ='Rose';
let episode = 'Intro to JavaScript'

//How do you define functions?
//They are objects/tools that can perform an action, via a set of instructions 
function podcastIntro(){
    return `Welcome to Episode 1: How to use functions`
    // most simplistic function, but we can build upon this to make it more dynamic
}
console.log(podcastIntro())
//this will give you the return when the function runs
//console.log prints the output of the function 

const episodeIntro = function(num, episode){
    //return `Welcome to Episode 1: How to use functions`
    console.log('this is ep intro')
    return `Welcome to episode ${num}, ${episode}`
    //the episode in the function takes precedence because it is more specific
}
//Argument is value of our function, the parameter is the placeholder for the value for the function (a function variable)

const hostIntro = function(host){
    console.log('this is host intro')
    return `Hello, I'm ${host}. Thank you for tuning into the Flatiron Podcast`
}

//Functions as arguments
function playFullIntro(part1, part2){
    console.log('this is full intro')
    return `${part1('one', 'how to use functions')}. ${part2('Rose')}`
    //in order to allow for your return to put the two function results, you need to interpolate as well as call the function. If this is the case, you need to pass in the arguments for the variables in the string interpolation.
    //if you want to make this even more dyanmic (not even hardcode in parameters), we can do this instead: add more parameters!
        // return `${part1(day, episode)}. ${part2(host)}`
        //if this is the case, your function must include the extra arguments! 
            //playFullIntro(episodeIntro, hostIntro, 'one', 'intro to js', 'Rose')
}

playFullIntro(episodeIntro, hostIntro)

//arrow functions (must always be defined with const or let)
const welcomeGuestIntro = () => {
    console.log('hello guest')
    return "Let's welcome our guest!"
}
// this is the same as this:
    // const welcomeGuestIntro = function(){
    //     return "Let's welcome our guest"
    // }
//also this:
    // const welcomeGuestIntro = () => "Let's welcome our guest!"
    // only to be used if short functions with short returns, not complex ones that require more lines

const payGuest = (pay) => {
    console.log('paid')
    return `${pay} paid to guest`
}
// you can make it even cleaner by removing parentheses if one parameter (TWO DOES NOT WORK)
//const payGuest = pay => `${pay} paid to guest`

//The call stack

//this allows us to call and invoke code
//first thing that goes in is the last thing that comes out
//a function is read and it is added onto the stack
    //for example, if you pass a function inside a function, it'll read the second function, pass it through the first one then outputted when finished.

function playEpisode(episodeIntro, hostIntro, num, episode, host, welcomeGuestIntro, payGuest, pay){
    console.log('this is play ep')
    playFullIntro(episodeIntro, hostIntro, num, episode, host)
    console.log('done')
    welcomeGuestIntro()
    payGuest(pay)
    console.log('finished')
}

playEpisode(episodeIntro, hostIntro, 'one', 'intro', 'rose', welcomeGuestIntro, payGuest, 100)
    // playEpisode is the first function called and invoked, playFullIntro, episodeIntro, hostIntro, etc.
    // stack looks like this:
    // hostIntro
    // episodeIntro
    // playFullIntro
    // playEpisode
    // add console logs in your functions to ensure that the functions are running
    // functions added on down in the function are on their own call stack, they aren't on the same stack.


//Scope review
//What's global scope
//What's functional scope
//block scope




//Write a function that takes 2 parameters.  Return the two parameters multiplied by each other.
function multiply (a,b) {
    return a*b
}
// Write a function that takes 2 parameters. Return the two parameters added together.
function add(a,b) {
    return a + b;
}
// Write a function that takes 2 parameters. Return the two parameters subtracted from one another.
function subtract(a,b){
    return a - b
 } 
// Write a function called doMath with a parameter defined as someMath. Invoke someMath with the arguments 10 and 5,  within doMath
function doMath(someMath){
    return someMath(10,5);
}
// In the browser console, console.log or debugger, invoke doMath 3 times, each time passing it each of the 3 functions you defined for 1, 2, and 3. Observe the results. 
doMath(multiply);
doMath(subtract);
doMath(add);
//to make this more dynamic, you'd have to add in more parameters, i.e., 
function doMath(someMath, num1, num2){
    return someMath(num1, num2);
}
doMath(multiply, 5, 10);
