$("#li-1").click(function(){
    window.open("https://www.youtube.com/watch?v=w9QLn7gM-hY");
});
$("#li-2").click(function(){
    window.open("https://www.youtube.com/watch?v=Ae7CtryWCkc&list=OLAK5uy_l6olFPG-UrfC2EJFciCWv5cbYBoesK_0I");
});
$("#li-3").click(function(){
    window.open("https://www.youtube.com/watch?v=aRmcbo5RAks&list=PLPP6w1_F70wkaLp2hynlPPzEkADGz5fza&index=4");
});
var num = 4;
$("#inputButton").click(function(){
    $("#ul-1").append("<li class='list-item' id='li-$(\'num\')'" + "><i class='fab fa-youtube'></i>" + "\"" + $("#inputText").val() + "\"</li>");
    num++;
});



