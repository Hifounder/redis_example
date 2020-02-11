const Store = require('../../database/store/RedisStore')
const redis = new Store(process.env.REDIS_URL);
const session = require('express-session')
let RedisStore = require('connect-redis')(session)
module.exports = {
    redis,
    session: session({
        store: new RedisStore({ client: redis.redis }),
        name: 'express:sess',
        secret: 'redis session secret',
        resave: false,
        cookie: { maxAge: 60 * 1000 }
    }),
};
