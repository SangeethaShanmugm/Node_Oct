import express from 'express';
import redis from 'redis'
const app = express();
const port = 8088;

// connect redis
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})

//initialize redis key
client.set('apivisitcount', 0)

app.get("/", (req, res) => {
    client.get('apivisitcount', (err, apivisitcount) => {//retrieve current value of apivisitcount key from redis
        res.send(`Number of visits are ${apivisitcount}`)
        client.set('apivisitcount', (+apivisitcount) + 1)
    })

})

app.listen(port, () => {
    console.log('app is running on port' + port)
})