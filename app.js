var personalType = prompt("Are you otaku?");


var welc;

if (personalType === "YES" || personalType == "yes") {
    welc =alert("welcome to your favorite anime store");
    welc=prompt("Type the name of the Anime please");
    document.write(welc);
    confirm("Welcome to your store");
    var testType=prompt('what are you interested in anime or video games ?');


}

else if (personalType === "no" || personalType == "NO") {
    welc = alert("you can leave the page");
    document.write(welc);

}


var itemType = '';
var result = 0;
var numItems='';
while (testType == 'anime' || testType == 'video games') {
  testType = prompt('What will you ask for , figures or  games cd');
 if (testType=='figures'){
  numItems=prompt('how many figure do you want');
  itemType = '<img src="images/Anime.jpg"/>';
}
else if(testType=='games cd'){
    numItems=prompt('How many cd do you want');
    itemType = '<img src="images/video game.jpg"/>';

}
}

for (var i = 0; i < numItems; i++) {
  result = result + itemType;

}
document.write(result);


// lab06 functions


function getPwd(){
  var pwd=prompt('enter your password');
  console.log(pwd);

}

getPwd();

var getavg = function (a,b,c){

var avg = (a+b+c)/3 ;

return avg ;
}

var average = getavg(100,100,100);
console.log(average);

document.write(average);
















