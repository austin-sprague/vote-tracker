// constructor function for images

function Image(place,type,path,votes){
  this.place = place;
  this.placeType = type;
  this.path = path;
  this.votes = 0;
}

// new image object constructor function for images in array

var imagesArray = [
  new Image ('bauhaus', 'Extra Strong Coffee', 'img/bauhaus.jpg',0),
  new Image ('caffe vita','Roastery', 'img/cafe-vita.jpg',0),
  new Image ('cherry street','Coffee House with Famous Barista', 'img/CherryStreet.jpg',0),
  new Image ('elysian','Brewery', 'img/elysian.jpg',0),
  new Image ('fremont','Brewery', 'img/fremont-brewing.png',0),
  new Image ('hello robin','Specialty Cookies', 'img/hello-robin.jpg',0),
  new Image ('hilliards', 'Brewery','img/hilliards.jpg',0),
  new Image ('hot cakes', 'Molten Chocolate Cakes','img/hot-cakes.jpg',0),
  new Image ('molly-moon','Handmade Ice Cream', 'img/molly-moon.png',0),
  new Image ('rainier','Beer', 'img/rainierbeer.jpg',0),
  new Image ('starbucks','Coffee', 'img/starbucks.jpg',0),
  new Image ('top pot','hand-forged donuts', 'img/top-pot.jpg',0),
  new Image ('victrola', 'Roastery','img/victrola.jpg',0)
]

// random number generator


var tracker = {
  randNum: function () {
    return Math.floor(Math.random() * (imagesArray.length));
  } 
};

//randomly choosing image 1 and image 2

var leftImage = document.getElementById('left image');
var rightImage = document.getElementById('right image');

tracker.randChoice = function (){
  var randChoice1 = this.randNum();
  var randChoice2 = this.randNum();
  while (randChoice1 === randChoice2) {
    console.log ("duplicate found");
    randChoice2 = this.randNum();
  }
  return [randChoice1, randChoice2];
}

leftImage.src = imagesArray[tracker.randChoice()[0]].path
rightImage.src = imagesArray[tracker.randChoice()[1]].path


// counter function

tracker.counter = function () {
  this.votes = this.counter +=1;
};


// add event Listener

leftImage.addEventListener ('click', function() {
  imagesArray[tracker.randChoice()[0]].vote +=1;
  console.log("the winner is" + imagesArray[tracker.randChoice()[0]].vote)
});

rightImage.addEventListener ('click', function() {
  imagesArray[tracker.randChoice()[1]].vote +=1;
  console.log("the winner is" + imagesArray[tracker.randChoice()[1]].vote)
  
});

var data {
  votes: 


}


