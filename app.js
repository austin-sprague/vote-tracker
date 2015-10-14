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

var left = document.getElementById('left');
var right = document.getElementById('right');

tracker.randChoice = function (){
  var randChoice1 = this.randNum();
  var randChoice2 = this.randNum();
  while (randChoice1 === randChoice2) {
    console.log ("duplicate found");
    randChoice2 = this.randNum();
  }
  var results = [randChoice1, randChoice2];
  left.src = imagesArray[results[0]].path;
  right.src = imagesArray[results[1]].path;
}




// counter function

tracker.voteFor = function (uri) {
  for (var i in imagesArray){
    if (imagesArray[i].path === uri){
      imagesArray[i].votes +=1;
    }
    // console.dir(imagesArray);
  }

  this.votes = this.counter +=1;
};



// add event Listener

left.addEventListener ('click', function(e) {
  var targetSource = e.target.src;
  targetSource = targetSource.split("tracker/")[1];
  tracker.voteFor(targetSource);

  // console.log("the winner is" + imagesArray[results[0]].votes);
  tracker.randChoice();
});

right.addEventListener ('click', function(e) {
  var targetSource = e.target.src;
  targetSource = targetSource.split("tracker/")[1];
  tracker.voteFor(targetSource);
  // console.log("the vote is" + imagesArray[results[1]].votes);
  tracker.randChoice();
});

tracker.randChoice();



var data= [
{
  value: 25,
  label: 'Coffee',
  color: '#811BD6',
  hightlight: '#811b33'
},

{
  value: 25,
  label: 'Pike Sign',
  color: '#9CBABA',
  hightlight: '#9CBA99'
}

];

var context =document.getElementById('chart').getContext('2d');

var seattleChart = new Chart(context).Doughnut(data, {
    animationSteps: 200,
    animationEasing: "easeOutBounce",
    animateRotate:  true,
    animateScale: true

});

