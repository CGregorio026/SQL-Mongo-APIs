var express = require('express');
var router = express.Router();

// GET homepage
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'terry bogard is in smash!!! bottom text'
    }
    );
})
.post('/', async (request,response) => {
    console.log(request.body)
    response.end();
});

module.exports = router;