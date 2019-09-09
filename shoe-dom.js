var selectColorElement = document.querySelector(".selectColor");
var selectSizeElement = document.querySelector(".selectSize");
var selectBrandElement = document.querySelector(".selectBrand");
var searchButtonElement = document.querySelector(".searchButton");
var shoeDisplayElement = document.querySelector(".shoeDisplay");


var shoeElement = document.querySelector(".");
var shoeTemplateSources = document.querySelector(".shoeTemplate").innerHTML;
var shoesTemplates = Handlebars.compile(shoeTemplateSources);

instance = shoesFactory();


function theShoe(){
contain = instance.filter();

var shoeData = shoesTemplates({ shoes: contain})
selectColorElement.value;
selectBrandElement.value

}
searchButtonElement.addEventListener('click', theShoe);


