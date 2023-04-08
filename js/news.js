// var ltc = document.querySelector(".priceD")
// var btc = document.querySelector(".priceC")
// var eth = document.querySelector(".priceB")
// var doge = document.querySelector(".priceA")

var livenews = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.thenewsapi.com/v1/news/headlines HTTP/1.1",

    "method": "GET",
    "headers": {}
}

$.ajax(livenews).done(function (response){
console.log(response)

});

document.querySelector(".crypto").classList.remove("loading");
