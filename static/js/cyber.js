
function showHint() {
    $('#hint-body').show();
}

function hideHint() {
    $('#hint-body').hide();
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

// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList, selector);

  for (var i = 0; i < myList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
    var rowHash = myList[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}
