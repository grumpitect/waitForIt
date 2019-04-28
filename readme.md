# A library for waiting for mongoDB or redis to come online

This small library is for waiting for database services to come online, it is useful for applications that cannot run if the database is not online. This will specially come in handy when using containers (like Docker containers) to run the project because you don't know if the database containers are online or not.

example usage:
```javascript
// The options parameter will be passed to the underlying driver.

await waitforit.mongo(mongoUrl, {
  retryTimeout: 2000, // The time to wait before every retry - default is 2000 milliseconds
  timeout = -1, // A timeout after which the code gives up with an exception - default is -1 which means no timeout
});

or

await waitforit.redis({
  host,
  port,
});
```