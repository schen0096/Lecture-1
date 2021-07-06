const bookStore = {
    location: "Seattle",
    inventory: [
        {
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            price: 10,
            reviews: [{user_id: 1, content:'Good book, but not great for new coders'}],
            inventory: 10
        },
        {
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            price: 45,
            reviews: [{user_id: 15, content:'good way to learn JQuery'}],
            inventory: 2
        },
        {
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 36,
            reviews: [{user_id: 25, content:'I disagree with everything in this book'}, {user_id: 250, content:'Only JS book anyone needs'}],
            inventory: 8
        },
        {
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 25,
            reviews: [{user_id: 44, content:'Great intro to js book'}, {user_id: 350, content:'It really is the Definitive guide'}],
            inventory: 0
        },
        {
            title: 'You Don’t Know JS',
            author: 'David Flanagan',
            price: 6,
            reviews: [{user_id: 76, content:'You can find this for free online, no need to pay for it!'}],
            inventory: 7
        }

    ]
}





// 1. Console.log title of the 2nd book
// console.log(bookStore.inventory[1].title);
// 2. Console.log the 2nd review from 'JavaScript: The Good Parts'
// console.log(bookStore.inventory[2].reviews[1]);
// 3. Console.log the price of the 3rd book 
// console.log(bookStore.inventory[2].price);
// 4. Console.log and capitalize the title of the first book
// console.log(bookStore.inventory[0].title.toUpperCase());
// 5. Add a key of ‘reorder’ with the value of true to any book with an inventory of 0

function reOrder(collection){
    for (const a of collection){
        if (a.inventory === 0){
            a.reorder = true
        }
    } 
}
reOrder(bookStore.inventory)
console.log(bookStore.inventory);

// OR 

bookStore.inventory.forEach(element => {
    if (element.inventory === 0){
        element.reorder = true
    }
})
console.log(bookStore.inventory)

// OR

let filterArr = bookStore.inventory.filter(book => book.inventory === 0).map(book => { book.reorder = true return book})
console.log(filterArr)
// this returns only the books with inventory 0 and you can change it after pulling

// 6. Loop through the bookStore inventory and console.log the title of every book

bookStore.inventory.map(name => {
    console.log(name.title)
})

console.log(bookStore.inventory.find(books => books.title === 'JavaScript: The Definitive Guide').title)

console.log(bookStore.inventory.filter(books => books.inventory < 3).map(book => book.title))