window.onload = function(){
  console.log("window loaded");
  var bucketListCountries = getSavedList();
  getCountriesForDropDown();

  var form = document.getElementById("country-form");
  form.onsubmit =function(e){
    e.preventDefault()
    
    
  }

  // populateList(bucketListCountries);

};


var getCountriesForDropDown = function(){
  request = new XMLHttpRequest();
  request.open("GET", "http://restcountries.eu/rest/v1/")
  request.onload = function(){
    if (request.status === 200){
      var countriesReturned = JSON.parse(request.responseText);
      console.log(countriesReturned);

      populateDropDown(countriesReturned);

      return countriesReturned;
    };
  };// [end] request.onload
  request.send();
};
 
var populateDropDown = function(countries){
  console.log("populate dropdown function running");
  var list = document.getElementById("country");
  for (var i = 0; i < countries.length; i++){
    var option = document.createElement("option");
    option.innerText = countries[i].name;
    option.value = i;
    list.appendChild(option);
  }
};


var getSavedList = function(){
  var request = new XMLHttpRequest;
  request.open("GET", "http://localhost:3000/countries");
  var countriesFromDb;
  request.onload = function(){
    if (request.status === 200){
      countriesFromDb = JSON.parse(request.responseText);
    }
  };// [end] request.onload func
  request.send();
  return countriesFromDb;
};

var populateList = function(bListCountries){

};
