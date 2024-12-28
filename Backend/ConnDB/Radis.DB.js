const Redis = require("ioredis");


const radisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
})

radisClient.on('connect', () => {
    console.log('Radis Connected');
})

radisClient.on('error', (err) => {
    console.log('Radis Error', err)
})

module.exports = radisClient;