//Lets make an app to track orders at our bakery Flatiron Cakes!

const bakery = {
    store:'FlatironCakes',
    location: 'Seattle',
    orders:[
        {
            id: 13,
            flavor: 'Vanilla',
            size: '6" cake',
            amount: 1,
            price: 40.00,
            ingredients: ["buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
        },
        {
            id: 14,
            flavor: 'Raspberry Cardamon Rose',
            size: '9" cake',
            amount: 1,
            price: 50.00,
            ingredients: ["cardamon", "rose water", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
        },
        {
            id: 15,
            flavor: 'Pink Champagne',
            size: 'cup cake',
            amount: 25,
            price: 37.5,
            ingredients: ["Andre Blush Champagne", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
        },
        {
            id: 1,
            flavor: 'Earl Grey',
            size: 'cup cake',
            amount: 12,
            price: 18.00,
            ingredients: ["earl grey", "buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
        }
    ]
}

// Objects
//Create properties (key:value) 
// How do you create an object? with curly braces
let obj = {
    name: 'rose',
    age: 9
}
// most general way to create most if not all of your objects
// a plain old javascript object


// Read Values
// how can we see the values? use console.log()
console.log(bakery.store) // this would be an example
console.log(bakery["location"]) // bracket notation example
// very rare but you will use bracket notation in some cases, but dot notation is the rule of thumb
// bracket notation - DOM elements (selecting the ones with hyphens)
console.log(Object.keys(bakery)) // this will return all the keys in an array 
// if you want just the keys, this is what you'd do
console.log(Object.values(bakery)) // this will return all the keys in an array
console.log(Object.entries(bakery)) // an array of arrays of all the keys and values together

// adding a new value
bakery.address = "999 9th Seatle Wa 99999" // OR bakery["address"] = "999 9th Seatle Wa 99999"
console.log(bakery)
// we can now see that the address is added in the console
// good thing to note, key order doesn't matter, it goes in alphabetical order


//Update Values 
bakery.store = "FlatironBakes"
console.log(bakery)
// we can now see that the address is updated in the console

//Delete Values and keys in objects
bakery.delete('address')
console.log(bakery)
// this is incorrect as delete is an operator not a method
// instead it should be:
delete bakery.address
console.log(bakery)


//Arrays
//create an array
let arr = [1,2,3]
// can test if array using Array.isArray(arr) 
// arrays are objects in javascript, so using typeof arr will return as object

//Read elements
//let's say I want to read the first item in the orders array within bakery
console.log(bakery.orders[0]) // nested array, so you can chain it using dot notation
// how about getting into ingredients?
console.log(bakery.orders[0].ingredients[0]) // deeply nested in, so you have to specify how to get into it

//Update elements
//add elements 
let cakeObj =         {
    id: 22,
    flavor: 'Vanilla',
    size: '6" cake',
    amount: 4,
    price: 40.00,
    ingredients: ["buttermilk", " vanilla extract", "eggs", "sugar", "butter", "baking soda", "baking powder", "flour"]
},
bakery.orders.push(cakeObj) // OR bakery.orders.unshift(cakeObj)
console.log(bakery.orders.push(cakeObj))
//Delete elements
bakery.orders.pop(cakeObj) // this deletes the last element of the array
// OR bakery.orders.shift()
// if you want to update a specific index value
// bakery.orders[8] = 'hi'
// this is not preferred as you can end up creating empty arrays / objects 

//Loop Through object

//Loop Through Array 
    //How can we debug the loop by stopping the code in place?
function loopArray(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
loopArray(bakery.orders);
// this is a simple for loop to go through the array
// instead we can use a function to go through the array -> forEach
//forEach
        //How can we debug the loop by stopping the code in place?
bakery.orders.forEach(orders => {
    console.log(orders)
})
// performs the function on each part of the array
// takes a function as an argument



//map

let arr1 = bakery.orders.map(cakeOrder => {
    return 'Hi'
})
console.log(arr1)
// for every element within the array now, it is being remapped and changed to the word hi
// transform every element within the passed array into what you want
// you can also use this in another way -> returning the results of the array that you want
// cakeOrder is a parameter that is returned by the function each time it iterates through the array

let arr2 = bakery.orders.map (cakeOrder => {
    return cakeOrder.flavor
})

// OR

let arr3 = bakery.orders.map(cakeOrder => {
    cakeOrder.price = Math.floor(cakeOrder.price/2)
    return cakeOrder
})

// map returns a changed array and you can see it and utilize it. If you use forEach, it does something similar but you get no return

//filter/find -> one returns an array, the other is for a specific object in an array

let filterBooksArray = bakery.orders.filter(cakeOrder => {
    return cakeOrder.flavor === "Vanilla"
})
// perform a function on all elements in the array
// if it returns true, it will be added to the new array; if false it will do nothing

let filterBooksArray = bakery.orders.filter(cakeOrder => {
    return cakeOrder.price < 30
})

// this will return an array with all the objects that were under 30 dollars in price
// if you use find, it will find only the first result that comes up true and then stop working entirely
// you can use find / filter interchangably - just know what you need out of it 