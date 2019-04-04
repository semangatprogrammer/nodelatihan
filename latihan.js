var fs=require('fs');
var https=require('https');

fs.writeFile(__dirname+"/index.html","<h1>HTML is Great</h1>",function(error){
	if(error){
		return console.log(error);
	}else{
		return console.log("Congras");
	}
});

var myPhotolocation='https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';

https.get(myPhotolocation, function(response){
	response.pipe(fs.createWriteStream(__dirname+"/mydog.jpg"));
});