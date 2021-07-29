const request = require('request');

const breedName = process.argv[2];

request("https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  if (data[0].name.toLowerCase() === breedName.toLowerCase()) {
    console.log(data[0].description);
  } else {
    console.log("Sorry, I don't have information on that breed! :(");
  }
});
  