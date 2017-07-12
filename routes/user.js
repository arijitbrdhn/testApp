let express = require('express'),
    router = express.Router(),
    userService = require('../Services/user');

 /* Find particular Customer information */
router.post('/find', function(req, res){
	if(req.headers.token == userService.token){
    userService.findInfo(req.body, function(data){
        res.send(data);
    })
 }
});

/* View all the Customer information */
router.get('/getList', function(req, res){
   if(req.headers.token == userService.token){
    userService.listAll(req.query, function(data){
        res.send(data);
    });
 }
}); 

module.exports = router ;



