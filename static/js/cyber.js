
function showHint() {
    $('#hint-body').show();
}

function hideHint() {
    $('#hint-body').hide();
}

function callMe() {
    window.location = "./ddos.html";
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function validateEnc() {
    const msg = document.getElementById('cypher');
    axios.get('https://vulnr.hack-au.com/enc', {
     params:{msg: msg}
    })
        .then(function (res) {
            console.log(res);
            document.getElementById("res").textContent = res;
        })
        .catch(function (error) {});
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

