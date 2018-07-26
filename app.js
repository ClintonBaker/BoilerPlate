import express from 'express';
import session from 'express-session';
import routes from './server/routes';
import dotenv from 'dotenv';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import webpackDevServer from './webpack/dev-server';

//setup dotenv
dotenv.config({
  silent: true
});

//setup express app
const app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//cookie parser
app.use(cookieParser('CoWzJump OvArR MooonZ'));

//logger
app.use(logger('combined'));

//serve static files
app.use(express.static(path.join(__dirname, '/src/public')));

app.use(
  session({
    secret: 'CoWzJump OvArR MooonZ',
    resave: false,
    saveUninitialized: false
  })
);

//set up routes
app.use('/', routes);

//view engine
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'pug');

if (process.env.NODE_ENV != 'production') {
  webpackDevServer(app);
}

export default app;
