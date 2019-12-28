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
    // window.open("https://www.youtube.com/watch?v=w9QLn7gM-hY");
});
$("#2").click(function(){
    prebuildQuery("2")
    // window.open("https://www.youtube.com/watch?v=Ae7CtryWCkc&list=OLAK5uy_l6olFPG-UrfC2EJFciCWv5cbYBoesK_0I");
});
$("#3").click(function(){
    prebuildQuery("3");
    // window.open("https://www.youtube.com/watch?v=aRmcbo5RAks&list=PLPP6w1_F70wkaLp2hynlPPzEkADGz5fza&index=4");
});

//the above works
//the below does not so much
// stuck trying to correctly append innertext of newly created list items to youtube search query
//might be a 'this' issue,
// or maybe an id issue
var num = 4;
var newValue = "";
$("#inputButton").click(function () {
    newValue = $("#inputText").val();
    $("#ul-1").append("<li class='list-item' id="+ num + "><i class='fab fa-youtube'></i>" + "\"" + newValue + "\"</li>");
    // this.id = JSON.stringify(num);
    // let newId = this.id;
    // console.log(newId);
    // num++;
    var finalQuery = "";
    $("li").click(function () {
        console.log(num);
        var newText = document.getElementById(JSON.stringify(num)).innerText;

        console.log(newText);
        if (num >= 4) {
         prebuildQuery(num)
            newSearch = "https://youtube.com/results?search_query=";
            newSearch += finalQuery;



            // prebuildQuery(num);
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









