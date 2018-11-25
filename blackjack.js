var cardCounter = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
    ]
var counter = 0;
var hotOrCold = "neutral";

$(document).ready(function(){
    alert("Okay! Click the card for each one that is dealt. If it says it is HOT, that means you should expect high cards, COLD means low cards. If a card is pink, there are 3 more in the deck, red means 2 more, maroon means 1 more, and black means all of those cards have been dealt. Love you! <3 ")
});

$("h3").click(function(event) {
    //alert(event.target.id)
    // $(this).css("background-color", "red");
    if(cardCounter[event.target.id] == 1){
        $(this).css("background-color", "pink");
        cardCounter[event.target.id]++;
    }else if(cardCounter[event.target.id] == 2){
        $(this).css("background-color", "red");
        cardCounter[event.target.id]++;
    }else if(cardCounter[event.target.id] == 3){
        $(this).css("background-color", "maroon");
        $(this).css("color", "white");
        cardCounter[event.target.id]++;
    }else if(cardCounter[event.target.id] == 4){
        $(this).css("background-color", "black");
        cardCounter[event.target.id]++;
    }
    
    if((event.target.id == "0" || event.target.id =="1" || event.target.id =="2" || event.target.id =="3" || event.target.id =="4")
    && cardCounter[event.target.id] <= 4)
    {
        counter--;
    }
    else if((event.target.id == "12" || event.target.id =="11" || event.target.id =="10" || event.target.id =="9" || event.target.id == "8")
    && cardCounter[event.target.id] <= 4)
    {
        counter++;
    }
    
    if(counter > 0){
        hotOrCold = "HOT"
        $("#hotOrCold").css("color", "red");
    }else if(counter < 0){
        hotOrCold = "COLD"
        $("#hotOrCold").css("color", "blue");
    }else if(counter == 0){
        hotOrCold = "neutral"
        $("#hotOrCold").css("color", "black");
    }
    
    //alert(counter);
    $("#hotOrCold").text(hotOrCold);
})