var personalType = prompt("Are you otaku?");
alert("if you are an otaku continue please");
var AnimeName = prompt("Type the name of the Anime please");


var welc;

if (personalType == "YES" || personalType == "yes")
{
    welc = "welcome to your favorite anime store";

}
else if (personalType == "no" || personalType == "NO") {
    welc = "you can leave the page";
}


document.write(welc);

confirm("Welcome to your store");
