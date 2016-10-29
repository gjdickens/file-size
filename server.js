var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer()


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Set Up Routes
var router = express.Router();

// Middleware for all requests
router.use(function(req, res, next) {
  next();
});

//landing page route

app.use('/', express.static(path.join(__dirname, 'public')));


router.post('/', upload.single('file'), function(req,res) {
  res.json({size: req.file.size})
});



// Register Routes
app.use('/file-size', router);

// Start Server
app.listen(port);
console.log('Listening on ' + port);
