// const options = {
//   method: 'GET',
//   url: 'https://api-basketball.p.rapidapi.com/games',
//   params: {h2h: '142-144'},
//   headers: {
//     'X-RapidAPI-Key': 'd6a39006b4msh328938001130f12p1a88ffjsnf2ad9e51125f',
//     'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// var settings = {
//     "url": "https://v1.basketball.api-sports.io/{endpoint}",
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//       "x-rapidapi-key": "74b5c604eba9190bea64493fb3eac82e",
//       "x-rapidapi-host": "v1.basketball.api-sports.io"
//     },
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });

// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://betsapi2.p.rapidapi.com/v1/bet365/inplay");
// xhr.setRequestHeader("X-RapidAPI-Key", "d6a39006b4msh328938001130f12p1a88ffjsnf2ad9e51125f");
// xhr.setRequestHeader("X-RapidAPI-Host", "betsapi2.p.rapidapi.com");

// xhr.send(data);


async function logJSONData() {
    const response = await fetch("https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=dd0e3dc59e068781cdf3a0235b7b7f232a1f8291c040032a6bfbc70564b866de");
    const jsonData = await response.json();
    console.log(jsonData);
  }

logJSONData()  


// https://data.nba.net/prod/v1/today.json

// https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=dd0e3dc59e068781cdf3a0235b7b7f232a1f8291c040032a6bfbc70564b866de