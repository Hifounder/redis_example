const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { redis, session } = require('./utils/redis-client');

app.use(session)

app.use(function (req, res, next) {
    if (!req.session) return next(new Error('session錯誤'))
    // console.log(req.session) // 檢查 session
    next()
})
app.get('/', (req, res) => res.send('Redis For Example'));
app.get('/store/:key', async (req, res) => {
    const { key } = req.params;
    const value = req.query;
    await redis.set(key, value, 60 * 60 * 24 * 30)
    if (value) req.session[key] = value;

    return res.send(`${key} Success`);
});
app.get('/:key', async (req, res) => {
    const { key } = req.params;
    const value = await redis.get(key)
    if (value) req.session[key] = value;

    return res.send(value);
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));