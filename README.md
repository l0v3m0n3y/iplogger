# iplogger
JavaScript library for iplogger.org
# main
```js
const {iplogger} = require('./iplogger');

const loger = new iplogger();
loger.create_url(url).then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
