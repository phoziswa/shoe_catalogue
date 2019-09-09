function ShoesFactory(){
  var shoesList = 0
    var shoes = [
        { color : 'Black', brand : "Nike",   price : 1200,  in_stock : 7 },
    
        { color : 'Grey', brand : "Adiddas", price : 950,  in_stock : 3 },
    
        { color : 'Peach', brand : "Reebork", price : 100,  in_stock : 4 },
    
        { color : 'White', brand : "Lacoste", price : 1600,  in_stock : 3 },
    
        { color : 'Navy', brand : "Le Coq Sportif", price : 1800,  in_stock : 3 },
        
       ];

  
function addShoe(){
  for (var i = 0; i < shoesList.length; i++) {
    shoesList = shoesList[i];
  }
}
  function filter(param){

    if (shoes.brand === param.brand && shoes.color === param.color && shoes.size === param.size) {
      list.push(shoes);
  }
}
return{
    addShoe,
    filter
 }
}