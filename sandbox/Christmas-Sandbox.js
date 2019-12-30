var newSearch = "";

function prebuildQuery(id){
    newText = document.getElementById((id)).innerText;
    console.log(newText);
    var splitText = newText.split('');
    for (var i = 0; i < splitText.length; i++) {
        if (splitText[i] === (" ")) {
            splitText[i] = "+";
        } else if (splitText[i] === "\"" || splitText[i] === "'") {
            splitText[i] = "";
        }
    }
    finalQuery = splitText.join('');
    newSearch = "https://youtube.com/results?search_query=";
    newSearch += finalQuery;
}
$("#1").click(function(){
    prebuildQuery("1");
    window.open(newSearch);
});
$("#2").click(function(){
    prebuildQuery("2");
    window.open(newSearch);
});
$("#3").click(function(){
    prebuildQuery("3");
    window.open(newSearch);
});

//starts num at 4 because 1,2,3 are the ids of prebuilt list items
var num = 4;
var newValue = "";
$("#inputButton").click(function () {
    newValue = $("#inputText").val();
    $("#ul-1").append("<li class='list-item' id="+ num + "><i class='fab fa-youtube'></i>" + "\"" + newValue + "\"</li>");
    $("li").click(function () {
        console.log(num);
        var newText = document.getElementById(JSON.stringify(num)).innerText;
        console.log(newText);
        if (num >= 4) {
    //the num has to be stringified to be used
         prebuildQuery(num.toString());
         window.open(newSearch);
        } else {
            console.log("it should open another way")
        }
        num++;

    });
});




// $("li").click(function(){
//     console.log(idVar.text);
//     console.log(this.value);
//     window.open(newSearch);
// });









