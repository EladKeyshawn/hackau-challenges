var j = 0,
  i	= 0,
  count = 0,
  t = "",
  text ="01101100 01100101 01110110 01100101 01101100 01110011 00101111 01111000 01110011 01110011 00110001 00101110 01101000 01110100 01101101 01101100",
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
