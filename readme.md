### Redis

類似 `mongoDB` 但更有 key => value 的使用感
範例是使用到 `ioredis` 套件來使用

### cookies vs session 
cookies 非常方便可以放置於客戶端，就可以減去伺服端的容量，但就是客戶可以去偽造
session 相較一些重要的資訊就是放在session中
對於後端而言，中間層服務 `redis` 或 `mongoDB` 這種，目的是減少真正永久存取層 `MySQL` 的不定性
看專案的規模來看需不需要製作中間層服務

### 使用方式
1. `npm i`
2. `docker-compose up`