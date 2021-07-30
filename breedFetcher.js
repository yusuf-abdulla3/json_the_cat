const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request("https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
   if (error) {
     callback(error, null);
   }
    const data = JSON.parse(body);
    if (data[0].name.toLowerCase() === breedName.toLowerCase()) {
      // console.log(data[0].description);
      callback(null, data[0].description);
    } else {
      callback("Sorry, I don't have information on that breed! :(", null);
    }
  });
}; 
  

module.exports = { fetchBreedDescription };

  