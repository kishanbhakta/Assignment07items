console.log(items);

                  // Question1

// get all prices
var allPrice = items.map (function (item) {
  return item.price;
});

// get the sum
var sum = allPrice.reduce (function (previous, current) {
  return previous + current;
});

// average price
var average = sum / allPrice.length;

// answer
var answer = average.toFixed(2);

// drop answer in DOM Node
var answer1 = document.querySelector('#answer1');
answer1.innerText = '';
items.forEach( function (item) {
  answer1.appendChild(document.createTextNode(item.price + '\n'));
});
document.querySelector("#answer1").textContent = "The average price is $" + answer;




                  // Question2



var mike = [];

var allTitlePrice = items.filter (function(item){
  if (item.price > 14 && item.price <18)


  mike.push (item.title);

});
console.log(mike);

var answer2 = document.querySelector('#answer2');
answer2.innerText = '';

mike.forEach(function(mike){
answer2.appendChild(document.createTextNode(mike + "\n"));
});




                  // Question3
var currCode = [];

// get all currency codes
var currencyCode = items.filter (function (item) {
  return item.currency_code;
});

// find GBP













































