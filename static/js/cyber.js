

function showHint() { $('#hint-body').show(); }

function hideHint() { $('#hint-body').hide(); }

function callMe() { window.location.href = "../levels/netcat.html"; }

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    var time = h + ':' + m + ':' + s;
    $('#time').text(time);
}
