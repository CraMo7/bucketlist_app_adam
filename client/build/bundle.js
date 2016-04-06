/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map