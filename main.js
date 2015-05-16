// console.log(items);

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


// blank array
var mike = [];

var allTitlePrice = items.filter (function(item){
  if (item.price > 14 && item.price <18)


  mike.push (item.title);

});
// console.log(mike);

var answer2 = document.querySelector('#answer2');
answer2.innerText = '';

mike.forEach(function(mike){
answer2.appendChild(document.createTextNode(mike + "\n"));
});




                  // Question3


// blank array
var britCurr = [];
// get all currency codes
var filteredItems = items.filter (function (item) {
  return item.currency_code === "GBP";
});


// find GBP to enter text w/in scope of var britCurr you have to britCurr.push
filteredItems.forEach (function(item){

    britCurr.push(item.title + "costs \u00A3" + item.price);


var answer3 = document.querySelector('#answer3');
answer3.innerText = (britCurr);
});





                // Question4


// grab answer4 and clear ir
var answer4 = document.querySelector('#answer4');
answer4.innerText = ""
// get all items made of wood
var woodMaterial = items.filter(function (item) {
 item.materials.forEach(function(w) {
  if (w === "wood"){
    answer4.appendChild(document.createTextNode(item.title + "- made of wood" + "\n"));
  };
 });
});




                //Question5


//Grab answer 5 and clear it
var answer5 = document.querySelector('#answer5');
answer5.innerText = '';

//find which items were made of >= 8 materials
var filteredItems = items.filter(function(item) {
  return item.materials.length >= 8;
})

//run a for each on filteredItems and create variables for titles, materials lenths and materials
//Put the titles and number of materials in answer 5
filteredItems.forEach(function(item) {
  var title = item.title;
  var materials = item.materials;
  var length = materials.length;
  // add \n\n to create two new lines
  answer5.appendChild(document.createTextNode(item.title + " has " + length + " materials\n\n"));

//run a forEach on materials array and put them in answer 5
  materials.forEach(function(material) {
    answer5.appendChild(document.createTextNode(material + '\n'));
  })

  //put spaces in answer 5
  answer5.appendChild(document.createTextNode('\n'));
})



                  //Question 6


// blank array
var sellers = [];

// forEach on items array and create if statement to filter out btw "i_did" and "someone_else"
// sellers.push(item.who_made) since sellers array was created
items.forEach(function(item) {
  if (item.who_made === "i_did") {
    sellers.push(item.who_made);
  }
})

// put the sellers array combined with the length to get the number of items made by their sellers
var answer6 = document.querySelector('#answer6');
answer6.innerText = sellers.length + " were made by their sellers";








































