const express         = require('express');
const app             = express();

require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', './views');

const cors            = require('cors');
app.use(cors());

const logger          = require('morgan');
app.use(logger('dev'));

const path            = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser      = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const methodOverride  = require('method-override');
app.use(methodOverride('_method'));

const resources   = require('./resources');
app.use('/', resources);

app.listen(process.env.PORT || 8000, () => console.log('http://localhost:8000/'));
