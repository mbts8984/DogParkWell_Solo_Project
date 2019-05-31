
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const dogParkRouter = require('./routes/dogParkRouter');
const addDogRouter = require('./routes/addDogRouter.js');
const playdateEventRouter = require('./routes/playdateEventRouter.js');
//const getUserRouter = require('./routes/getUserRouter.js');
const getDogsRouter = require('./routes/getDogsRouter.js');
const fetchHomeParkRouter = require('./routes/fetchHomeParkRouter.js');
const updateUserRouter = require('./routes/updateUserRouter.js');
const sendEventRouter = require('./routes/sendEventRouter.js');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/dog-park', dogParkRouter);
app.use('/api/addDog', addDogRouter);
app.use('/api/playdate', playdateEventRouter);
//app.use('/api/getClient', getUserRouter);
app.use('/api/getDogs', getDogsRouter);
app.use('/api/getHomePark', fetchHomeParkRouter)
app.use('/api/updateUser', updateUserRouter);
app.use('/api/sendEvent', sendEventRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
