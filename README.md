## Logging Module

Logs all http requests for a node js server

### API
``` const {logOnRequest} = require('logging_module'); 
``` app.use(logOnRequest());

### Explanation

The logger will log all output to file logging.text in json stringified format with the id of a request as the current timestamp for the user making it easier for a user to track a request that went wrong along the way making it resolvable in real time.

### Testing
