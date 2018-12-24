const fs = require('fs');
module.exports = {
  logOnRequest() {
    return (req, res, next) => {
      let logger = {
        "pid": process.pid,
        "hostname": req.hostname,
        "msg": req.body,
        "query": req.query,
        "time": new Date(),
        "req": {
          "id": Date.now(),
          "method": req.method,
          "url": req.url,
          "headers": {
            "host": req.headers.host,
            "connection": req.headers.connection
          },
          "remoteAddress": req.connection.remoteAddress,
          "remotePort": req.connection.remotePort,
        }
      }
      fs.appendFile(__dirname+'/logging.txt', JSON.stringify(logger)+'\n', ((err) => {
        if(err) throw err;
        process.stdout.write('logs saved in logging.txt\n');
      }));
      process.stdout.write(JSON.stringify(logger)+'\n');
      next();
    }
  }
}
