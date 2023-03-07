// Create a service with [REST API](https://www.restapitutorial.com) 
//which performs the following functionality: 
// - A POST endpoint at `/reservation` where a user submits a JSON 
//request to add an event reservation to their profile
// - An event reservation must have not already passed to be valid
// - An event reservation must not overlap an existing reservation for that user
// - A GET endpoint at `/reservation` where a user gets all future event 
//reservations in their profile
// - All endpoints return standard HTTP response status codes
// - Error responses include supporting error message

// ** Note ** - An event is considered 'passed' if the current local time 
//is beyond the start time of the event. 
//Likewise, events are defined as in the future if their start date is beyond 
//the current local time.

// ** Note ** - Persistence of data is not expected in this challenge. 
//It is expected that the data will reset when the service is stopped/restarted.

// ** Sample Request ** - You may choose how to implement the API
// request & response models. Below is a sample request payload for `/reservation`
// ```json
// {
//   "user": "myusername",
//   "event": "Global Hack-a-thon",
//   "startTime": "2022-01-04T15:00:00Z",
//   "endTime": "2022-01-07T00:00:00Z",
// }
// ```   
//something to commit

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());


const getReservation = (req, res) => {
    res.send(        
    {
        "user": "myusername",
        "event": "Global Hack-a-thon",
        "startTime": "2022-01-04T15:00:00Z",
        "endTime": "2022-01-07T00:00:00Z",
    });
  };
  
app.get("/reservation", getReservation);



app.post("/reservation", (req, res) => {
    //An event is considered 'passed' if the current local time 
    //is beyond the start time of the event. 
    //Likewise, events are defined as in the future if their start date is beyond 
    //the current local time.
     // - An event reservation must have not already passed to be valid
    // - An event reservation must not overlap an existing reservation for that user
    const { user, event, startTime, endTime } = req.body;
    const date = new Date()
    res.json(        
        {
          "user": "myusername",
          "event": "Global Hack-a-thon",
          "startTime": "2022-01-04T15:00:00Z",
          "endTime": "2022-01-07T00:00:00Z",
        });

        //write conditionals for responses here
        if (date < startTime) {
            res.send(`${200} successful`);
        }
        else if(date === startTime || date > startTime){
            res.send(`${500} Error: event has passed`);
        }

  });

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)include supporting error message


app.listen(4000, () => {
    console.log(`Server is running on port 4000.`);
  });
  