
function showHint() {
    $('#hint-body').show();
}

function hideHint() {
    $('#hint-body').hide();
}

function showInput() {
    document.getElementById('name').innerHTML =
    document.getElementById("password").value;
    $("#password").val(" ");
}

function checkName() {
    var kids = $("#name").children();
    if (kids.length > 0) {
        alert("true");
    } else {
        alert("false");
    }
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
    const msg =$('#cipher').val();
    axios.get('https://vulnr.hack-au.com/enc', {
     params:{msg: msg}
    })
        .then(function (res) {
            console.log(res);
            if(res){
                document.getElementById("res").textContent = res.data;
            }
        })
        .catch(function (error) {});
}

function takeOver() {
    axios.get('https://vulnr.hack-au.com/takeover')
        .then(function (res) {
            console.log(res);
            if(res && res.data && res.data.status){
                document.getElementById("res").textContent = res.data.answer;
            } else {
                document.getElementById("res").textContent = "Not authorized";

            }
        })
        .catch(function (error) {
          document.getElementById("res").textContent = "Not authorized";
        });
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

