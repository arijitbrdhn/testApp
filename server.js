let app = require('express')(),
    bodyParser = require('body-parser');

let userRoute = require('./routes/user');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// To find particular or total customer list
app.use('/customer',userRoute);

// Check the home server 
app.get('/',function(req,res){
	res.send("Server connected");
});

app.listen(8080);