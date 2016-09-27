var addLi = function( parent, child, text ) {
  if (child === null) {
    child = document.createElement( "li" );
    parent.appendChild(child);
  }
  child.innerText = text;
  return child;
}

var addImg = function( parent, child, imageUrl, imageWidth) {
  if (child === null) {
    child = document.createElement( "img" );
    if (imageWidth !== undefined) child.width = imageWidth;
    parent.appendChild( child );
  }
  child.src = imageUrl;
  return child;
}

var CatElement = function(nameText, foodText, imageUrl) {

  var addName = function( parent, child, nameText ) {
    if (nameText === undefined) nameText = "undefined";
    return addLi(parent, child, "Name: " + nameText);  
  }

  var addFood = function( parent, child, foodText) {
    if (foodText === undefined) foodText = "undefined"
    return addLi(parent, child, "Favourite food: " + foodText );
  }

  var addImage = function( parent, child, imageUrl ) {
    if (imageUrl === undefined) imageUrl = "/place_holder.jpg";
    return addImg(catElement, child, imageUrl, 500);
  }

  var catElement = document.createElement( 'ul' );
  catElement.classList.add( "cat" );
  var name = addName(catElement, null, nameText);
  var food = addFood(catElement, null, foodText);
  var image = addImage(catElement, null, imageUrl);

  return {
    get catElement() { return catElement },
    set name( nameText ) { addName(null, name, nameText); },
    set food( foodText ) { addFood(null, food, foodText); },
    set image( imageUrl ) { addImage(null, image, imageUrl); }
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
  // var maccafferty = addCat("", "", "http://www.qqxxzx.com/images/cute-cats-images/cute-cats-images-9.jpg");
  var maccafferty = addCat();
  maccafferty.name = "MacCafferty the Mystery Cat";
  maccafferty.food = "Shoes";
  maccafferty.image = "http://www.qqxxzx.com/images/cute-cats-images/cute-cats-images-9.jpg";
}

window.onload = app;