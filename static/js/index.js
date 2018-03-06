var j = 0,
  i	= 0,
  count = 0,
  t = "",
  text ="0110001101111001011000100110010101110010",
  area = document.getElementById('area'),
  author = document.getElementById('author');

var typing = window.setInterval(function(){
    area.innerHTML+=text[count];
    author.innerHTML = "What now?";
    count+=1;
    if(count>text.length-1){
        window.clearInterval(typing);
    }
},50);

$(".text-box").hide().css("hidden");

var HACK_THE_IMPOSSIBLE = function () {
    $(".text-box").show().css("visibility");
};
