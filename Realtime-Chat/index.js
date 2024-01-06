const Redis = require("ioredis");
const redisUri = "rediss://default:AVNS_ibA0lZXUc1GKWOs_uzH@redis-137334d7-realtime-chatapp.a.aivencloud.com:27519"
const redis = new Redis(redisUri);

redis.set("key", "hello world");

redis.get("key").then(function (result) {
    console.log(`The value of key is: ${result}`);
    redis.disconnect();
});