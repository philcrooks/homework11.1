var addName = function( parent, child, nameText ) {
  child.innerText = "Name: " + nameText;  
  parent.appendChild(child);
}

var addFood = function( parent, child, foodText ) {
  child.innerText = "Favourite food: " + foodText;
  parent.appendChild(child);
}

var addImage = function( parent, child, imageUrl) {
  child.src = imageUrl;
  child.width = 500;
  parent.appendChild( child );
}

var CatElement = function(nameText, foodText, imageUrl) {
  var catElement = document.createElement( 'ul' );
  catElement.classList.add( "cat" );
  var name = document.createElement( "li" );
  addName(catElement, name, nameText);
  var food = document.createElement( "li" );
  addFood(catElement, food, foodText);
  var img = document.createElement( "img" );
  addImage(catElement, img, imageUrl);

  return {
    get catElement() { return catElement },
    set name( nameText ) { addName( catElement, name, nameText ) },
    set food( foodText ) { addFood( catElement, food, foodText ) },
    set image( imageUrl ) { addImage( catElement, addImage, imgURL) }
  };
}

var positionCat = function( catElement ) {
  var cats = document.getElementById( "cats" );
  cats.appendChild( catElement );
}

var addCat = function( nameText, foodText, image ) {
  var cat = new CatElement(nameText, foodText, image);
  positionCat(cat.catElement);
  return cat;
}

var app = function() {
  addCat("Alan", "Tuna (of course)", "http://kurld.com/images/wallpapers/cute-cat-wallpapers/cute-cat-wallpapers-18.jpg");
  addCat("Mad, Bad and Ready", "Everything", "http://www.housesearchaustralia.com.au/wp-content/uploads/2016/02/Guggugg.jpg");
  var maccafferty = addCat("", "", "http://www.qqxxzx.com/images/cute-cats-images/cute-cats-images-9.jpg");
  maccafferty.name = "MacCafferty the Mystery Cat";
  maccafferty.food = "Shoes";
  // maccafferty.imageUrl = "http://www.qqxxzx.com/images/cute-cats-images/cute-cats-images-9.jpg";
}

window.onload = app;