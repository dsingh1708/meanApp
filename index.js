console.log('hi hello hiiiiii divya')
//------pure node to display html (no express)-----*/

/*var http = require('http'),
fs = require('fs');
http.createServer(function(req, res) {
 res.writeHead(200, {
  'Content-Type': 'text/html',
'Access-Control-Allow-Origin' : '*'
});
var readStream = fs.createReadStream(__dirname + '/index.html');
readStream.pipe(res);  

}).listen(1337);
*/
//----to know what's being displayed----- */
// console.log('Visit me at http://localhost:1337');


//-----displaying after installing express ------*/
var express=require('express');

 
var app= express();
  var path = require('path');
    
  // send our index.html file to the user for the home page */
  app.get('/', function(req, res) {
  	res.sendFile(path.join(__dirname + '/index.html'));
  res.send("hiii this content is displayed here");
  });



app.listen(7000);
console.log("port is running");



//===routing model===== */


var adminRouter = express.Router();
// admin main page. the dashboard (http://localhost:7000/admin)
adminRouter.get('/', function(req, res) {
res.send('I am the dashboard!');
 });


 adminRouter.use(function(req, res, next) {
    
    	// log each request to the console
	console.log(req.method, req.url);
    
    // continue doing what we were doing and go to the route
    	next(); 
    });
    //router used with parameter 
    adminRouter.get('/users/:name', function(req, res) {
         	res.send('hello ' + req.params.name + '!');
         });



        // route middleware to validate :name
 adminRouter.param('name', function(req, res, next, name) {
    	
    console.log('doing name validations on ' + name);
    
    //save the item in the req
    	req.name= name;
   	next(); 
   });
   
    
          

// users page 
adminRouter.get('/users', function(req, res) {
	res.send('I show all the users!');
});

// posts page 
adminRouter.get('/posts', function(req, res) {
res.send('I show all the posts!');
 });

// apply the routes to our application
app.use('/admin', adminRouter);

//routing using app.route() 

app.route('/login')

    // show the form (GET http://localhost:7000/login)
    .get(function(req, res) {
 		res.send('this is the login form');
    })
    
    .post(function(req, res) {
        	console.log('processing');
        	res.send('processing the login form!');
        });