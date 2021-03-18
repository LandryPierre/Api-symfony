var callBackGetSuccess = function (data) {
  console.log("donnees api", data);
  var element = document.getElementById("zone_covid");

  let html = "";

  if (Array.isArray(data)) {
    for (i = 0; i < data.length; i++) {
      html = html + "Le nombre d'infecté est de " + data[i].active + "<br>";
    }
  } else {
    html = html + "Le nombre d'infecté est de " + data.active + "<br>";
  }

  element.innerHTML = html;
};

function buttonClickGET() {
    var isPays = document.getElementById('pays').checked;
        var isContinent = document.getElementById('continent').checked;
        if (isPays==true){
            var url ="https://disease.sh/v3/covid-19/countries/" +document.getElementById("queryLoc").value +"?strict=true";
        }else {
            var url ="https://disease.sh/v3/covid-19/continents/" +document.getElementById("queryLoc").value +"?strict=true";
        }

  $.get(url, callBackGetSuccess)
    .done(function () {
      // alert("second success");
    })
    .fail(function () {
      alert("error");
    })
    .always(function () {
      // alert("finished");
    });
}
