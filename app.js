var personalType = prompt("Are you otaku?");
alert("if you are an otaku continue please");
var AnimeName = prompt("Type the name of the Anime please");


var welc;

if (personalType == "YES" || personalType == "yes") {
    welc = "welcome to your favorite anime store";

}
else if (personalType == "no" || personalType == "NO") {
    welc = "you can leave the page";
}


document.write(welc);

confirm("Welcome to your store");



var clientType = prompt('Are You interested in anime or video games ?');

while (clientType == 'anime' || clientType == 'video games') {
    clientType = prompt('Welcome to your store . you can find what you want');
}
while (clientType !== 'anime' && clientType !== 'video games') {
    clientType = prompt('what are you interested in ?');

}

var itemType = '';

if (clientType === 'anime') {
    itemType = prompt('are you interested in figures or something else');

    while (itemType == 'figures') {

        document.write("some figures");
        itemType = '<img src = "images/Anime.jpg"/>';
        document.write(itemType);
    }


}

