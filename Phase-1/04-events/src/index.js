
document.querySelector('#book-form').addEventListener('submit',(e)=> {
  e.preventDefault()
  let newBook = {
    title: e.target.title.value,
    author: e.target.author.value,
    price:e.target.price.value,
    image_url:e.target.image_url.value,
    inventory: 0,
  }
  renderCard(newBook)
})


//Render ***********
function renderAside(storeObj){
  document.querySelector('.location').textContent = storeObj.name
  document.querySelector('#hours').textContent = storeObj.hours
  console.log(document.querySelectorAll('aside ul li'))
  document.querySelectorAll('aside ul li')[0].textContent = storeObj.number
  document.querySelectorAll('aside ul li')[1].textContent = storeObj.address

}

function renderCard(book){
  let li = document.createElement('li')
  let h4Title = document.createElement('h4')
  let h4Author = document.createElement('h4')
  let img = document.createElement('img')
  let pPrice = document.createElement('p')
  let pInventory = document.createElement('p')
  let btn = document.createElement('button')
  let reviews = document.createElement('details')
  // let reviews = document.createElement('ul')
  let form = document.createElement('form')
  let reviewText = document.createElement('input')
  reviewText.name = "review"
  reviewText.value = ""
  let submitBtn = document.createElement('input')
  submitBtn.type = 'submit'
  submitBtn.value = 'Submit'

  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.review)
    // if statement to check if anything was typed, if not it won't submit 
    if (e.target.review.value.length > 0){
      let p = document.createElement('p')
      // create new element to hold and add textContent to the element
      p.textContent = e.target.review.value
      // target was the form on the event and we need to grab the value out of it and put into reviews
      reviews.append(p)
      e.target.review.value = ""
      // blank out the submission field  
    }
  })

  form.append(reviewText, submitBtn)

  li.className = 'card'
  img.src = book.image_url
  h4Title.textContent = book.title 
  h4Author.textContent = book.author
  pPrice.textContent = `Price: ${book.price}`
  pInventory.textContent = `Inventory: ${book.inventory}`
  btn.textContent = 'Add Inventory'

  btn.addEventListener('click', () => {
    console.log('hi')
    book.inventory+=1
    pInventory.textContent = `Inventory: ${book.inventory}`
  })
  //HomeWork-------------------------------------------------
  //The books has an array of reviews
  //Add the review content to the card. 
  //Bonus
  //Add a form to the card that will render a new review to the card. 
  book.reviews.forEach( review =>  {
    const summary = document.createElement('summary')
    const p = document.createElement('p')
    summary.textContent = 'Reviews'
    p.textContent = review.content
    reviews.append(summary, p)
    // const li = document.createElement('li')
    // li.textContent = review.content
    // reviews.append(li)
  })
  // new element for the review
  // add in the content
  // append to the container

  li.append(img, h4Title, h4Author, pPrice, pInventory, btn, reviews, form)
  document.querySelector('#book-list').prepend(li)

}

// Render HTML is powerful but can cause issues with 
// Cross-site scripting
// Its safe to use if you're not using external data with it
// In this example it can be d
// function renderHTML(book){
//   let li = document.createElement('li')
//   li.className = 'card'
//   li.innerHTML = `
//     <img src=${book.image_url}>
//     <h4>${book.title}</h4>
//     <h4>${book.author}</h4>
//     <p>Price: ${book.price}</p>
//     <p>Inventory ${book.inventory}</p>
//   `
//   document.querySelector('#book-list').prepend(li)
// }


//Initial Render 
function initialRender(){
  console.log(bookStore)
  renderAside(bookStore)
  document.querySelector('#book-list li').remove()
  bookStore.inventory.forEach(renderCard)
  // the forEach above and below are doing the same thing
  // the one below has an unnecessary nested callback
  // the above is using renderCard as the callback
  bookStore.inventory.forEach(book => renderCard(book))

}
initialRender()
