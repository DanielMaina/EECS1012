// var ltc = document.querySelector(".priceD")
// var btc = document.querySelector(".priceC")
// var eth = document.querySelector(".priceB")
// var doge = document.querySelector(".priceA")

// var livenews = {
//     async: true,
//     crossDomain: true,
//     url: "https://api.thenewsapi.com/v1/news/headlines",
//     method: "GET",
//     headers: {
//       Authorization: "41e03a6323e046ef82bb6191764f9256"
//     }
//   };
  
//   $.ajax(livenews).done(function(response) {
//     console.log(response);
//   });
  
//   document.querySelector(".crypto").classList.remove("loading");

var facts = [
    {
      fact: "Fact 1",
      description: "Cats have 230 bones, but humans only have 206 bones"
    },
    {
      fact: "Fact 2",
      description: "Cats have whiskers on the backs of their front legs"
    },
    {
      fact: "Fact 3",
      description: "Cats are believed to be the only mammals who don’t taste sweetness"
    }
  ];

  var truths = [
    {
      fact: "Fact 1",
      description: " A dog’s nose print is unique, much like a person’s fingerprint."
    },
    {
      fact: "Fact 2",
      description: " Seventy percent of people sign their dog’s name on their holiday cards."
    },
    {
      fact: "Fact 3",
      description: "There are over 75 million pet dogs in the U.S.—more than in any other country."
    }
  ];
  
  var table = document.getElementById("myTable");

  var table2 = document.getElementById("dog-facts-table");
  
  for (var i = 0; i < facts.length; i++) {
    var row = table.insertRow(i+1);
    var factCell = row.insertCell(0);
    var descriptionCell = row.insertCell(1);
    factCell.innerHTML = facts[i].fact;
    descriptionCell.innerHTML = facts[i].description;
  }

  for (var i = 0; i < truths.length; i++) {
    var row = table2.insertRow(i+1);
    var factCell = row.insertCell(0);
    var descriptionCell = row.insertCell(1);
    factCell.innerHTML = truths[i].fact;
    descriptionCell.innerHTML = truths[i].description;
  }

const apiUrl = 'https://catfact.ninja/fact';

$.ajax({
  url: apiUrl,
  method: 'GET'
})
.done(function(response) {
  // Handle API response data
  console.log(response);
  
  // Add fact to HTML element with ID 'cat-fact'
  $('#cat-fact').text(response.fact);
})
.fail(function(jqXHR, textStatus, errorThrown) {
  // Handle API error
  console.error('Error:', errorThrown);
});

document.querySelector(".table").classList.remove("loading");


