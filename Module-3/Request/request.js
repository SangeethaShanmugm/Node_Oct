const request = require("request")

const url = "https://api.nasa.gov/DONKI/FLR?startDate=2016-01-01&endDate=2016-01-30&api_key=DEMO_KEY";

//Make a GET request

request(url, { json: true }, (error, response, body) => {
    if (error) {
        console.log("An error occured", error);
        return;
    }
    if (response.statusCode !== 200) {
        console.log("Unexpected status code", response.statusCode)
    }
    console.log("response", body);
})