---
day: Day 20
subject: Imperative And Declarative
posttype: wilt
number: 20
postdate: July 2019
---

In spoken languages, the imperative is used to express commands/give orders. This helps me remember how programming languages use the imperative.

In programming languages like JavaScript the **imperative** is used for giving orders that describe to the computer **how** to do something! An example is a `for` loop that does something to an array:

```js
var catRatingOutOfTen = [10, 12, 15, 14, 11, 13]
// Initialise a variable containing an empty array.
var accurateCatRating = []

// Initialise a variable called i and give it a value of 0. Run a loop and,
// each time, increase i by 1. Only loop while i is less than the number
// of items in the catRatingOutOfTen array.
for (var i = 0; i < catRatingOutOfTen.length; i++) {
  // Take catRatingOutOfTen array item number "i" out of the catRatingOutOfTen
  // array and multiply it by 2.
  var newRating = catRatingOutOfTen[i] * 2
  // Append the calculated value to the end of the accurateCatRating array
  // initialised earlier.
  accurateCatRating.push(newRating)
}
// Log the result of accurateCatRating.
console.log(accurateCatRating) // [20, 24, 30, 28, 22, 26]
```

Quite verbose, eh? However, looping through an array can also be done in a **declarative** way! The `map()` method is one way - it describes to the computer **what** to do, while letting it figure out the **how**. Check it out:

```js
var catRatingOutOfTen = [10, 12, 15, 14, 11, 13]

// Create a new array consisting of each item of the catRatingOutOfTen array...
var accurateCatRating = catRatingOutOfTen.map(function(n) {
  // ...and multiply each item by 2.
  return n * 2
})
// Log the result of accurateCatRating.
console.log(accurateCatRating) // [20, 24, 30, 28, 22, 26]
```

Quite a nice shortcut, isn't it? Declarative programming is a powerful way to write less verbose code. Since declarative programming is more abstract than imperative programming, it can take longer to learn and understand what declarative programming does under the hood. We often cannot immediately see exactly **how** declarative code works and creates its results. But once we understand how declarative code works, it can help us achieve in a shorter time what we would have achieved by instructing the computer step-by-step how we need it to do something.

JavaScript ES6 syntax allows an even more declarative way to get the `accurateCatRating`. Check it out below - the function declaration has been shortened with an arrow function, which makes an implicit return possible:

```js
var catRatingOutOfTen = [10, 12, 15, 14, 11, 13]

var accurateCatRating = catRatingOutOfTen.map(n => n * 2)

console.log(accurateCatRating) // [20, 24, 30, 28, 22, 26]
```

A lot of popular and powerful libraries, such as d3.js, Zdog, and GSAP take advantage of the declarative programming style for abstracting away logic and allowing cool things to be achieved with less code.

Please check out the [super good article](http://latentflip.com/imperative-vs-declarative) on imperative and declarative programming by [Philip Roberts](https://twitter.com/philip_roberts) that inspired me to write this post!
