const express = require('express');
const axios = require('axios');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const searchUrl = "https://api.openweathermap.org/data/2.5/weather?lat=12.96&lon=77.62&appid=2aa8342c3012d76d95588b3d6144ddca";



app.get('/', async (req, res) => {
  try {
    const response = await axios.get(searchUrl, { timeout: 10000 })
    const responseJSON = response.data;
    return res.status(200).json({ city: responseJSON.name, source: 'Docker Microservice', ...responseJSON, });
  } catch (err) {
    return res.json(err);
  };
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);