///styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{auto}/{width}x{height}{@2x}

var mapimg;
//38.8998° N, 77.0341° W Washington DC
//1.3521° N, 103.8198° E Singapore
//Search Results New York/Coordinates 40.7128° N, 74.0060° W
var clon=-77.0341;
var clat= 38.8998;
//38.8913° N, 77.0200° W National Gallery of Art

var lon = -77.0200;
var lat = 38.8913;



var zoom= 12;
var w = 600;
var h = 600;

var x;
var y;
//var cx;
//var cy;
let scooters;

function preload(){
	
	mapimg = loadImage("https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/"+clon+","+clat+","+zoom+",0,0/600x600?access_token=pk.eyJ1Ijoia2V2aW5wYXR0b24xIiwiYSI6ImNrMnowOHVnbTBkdjEzaHQ5ZWdja3I0dWwifQ.68vJPJo4LbmFRRGU7Py6kw")
	
//	var url = 'https://gbfs.uber.com/v1/dcs/free_bike_status.json';
//	
	scooters = loadJSON('jump.json');
	
}

function mercX(_lon)
	{
		_lon = radians(_lon);
		var a = (256/PI)*(pow(2,zoom));
		var b = _lon + PI;
		return a * b;
	}
	
function mercY(_lat){
		_lat = radians(_lat);
		var a = (256/PI)*(pow(2,zoom));
		var b = tan((PI/4)+(_lat/2))
		var c = PI - log(b);
		return a*c;
}

function setup(){
	
	print(scooters.data.bikes[0].lat);
	
	createCanvas(w,h);
	translate(w/2,h/2);
	imageMode(CENTER);
	image(mapimg,0,0);
	
	
	var cx = mercX(clon);
	var cy = mercY(clat);
	
	for(i=0;i<scooters.data.bikes.length;i++){
		
		lat = scooters.data.bikes[i].lat;
		lon = scooters.data.bikes[i].lon;
		
		x = mercX(lon) - cx;
		y = mercY(lat)- cy;
		
		fill (255, 0, 255);
		ellipse(x,y, 5,5);
	}
	
	
	
//	fill (255, 0, 255);
//	ellipse(x,y, 20,20);
	
	
	
	
//	function mercX(lon){
//  lon = radians(lon);
//  var a =(256/PI) * pow(2,zoom);
//  var b = lon + PI;
//  return a*b;
//}
//
//function mercY(lat){
//  lat= radians(lat);
//  var a =(256/PI) * pow(2,zoom);
//  var b = tan(PI/4+lat/2);
//  var c = PI - log(b);
//  return a*c;
//}

	
	
}

function draw(){
	
}