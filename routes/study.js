var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    var filePath = path.join('views/html/', 'Study.html');
    
    fs.readFile(filePath, function (error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

module.exports = router;
