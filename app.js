// constructor function for images

function Image(place,type,path,votes){
  this.place = place;
  this.placeType = type;
  this.path = path;
  this.votes = 0;
}

// new image object constructor function for images in array

var imagesArray = [
  new Image ('bauhaus', 'Extra Strong Coffee', 'img/bauhaus.jpg'),
  new Image ('caffe vita','Roastery', 'img/cafe-vita.jpg'),
  new Image ('cherry street','Coffee House with Famous Barista', 'img/CherryStreet.jpg'),
  new Image ('elysian','Brewery', 'img/elysian.jpg'),
  new Image ('fremont','Brewery', 'img/fremont-brewing.png'),
  new Image ('hello robin','Specialty Cookies', 'img/hello-robin.jpg'),
  new Image ('hilliards', 'Brewery','img/hilliards.jpg'),
  new Image ('hot cakes', 'Molten Chocolate Cakes','img/hot-cakes.jpg'),
  new Image ('molly-moon','Homemade Ice Cream', 'img/molly-moon.png'),
  new Image ('rainier','Beer', 'img/rainierbeer.jpg'),
  new Image ('starbucks','Coffee', 'img/starbucks.jpg'),
  new Image ('top pot','hand-forged donuts', 'img/top-pot.jpg'),
  new Image ('victrola', 'Roastery','img/victrola.jpg')
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
  console.log(left);

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
  tracker.randChoice();
  chartData();

});

right.addEventListener ('click', function(e) {
  var targetSource = e.target.src;
  targetSource = targetSource.split("tracker/")[1];
  tracker.voteFor(targetSource);
  tracker.randChoice();
  chartData();

});

tracker.randChoice();


var chartData = function(){

  var data= [
    {
      value: imagesArray[0].votes,
      label: 'bauhaus',
      color: '#3366CC',
      hightlight: '#811b33'
    },

    {
      value: imagesArray[1].votes,
      label: 'caffe vita',
      color: '#2E5CB8',
      hightlight: '#9CBA99'
    },
    {
      value: imagesArray[2].votes,
      label: 'cherry street',
      color: '#2952A3',
      hightlight: '#811b33'
    },
    {
      value: imagesArray[3].votes,
      label: 'elysian',
      color: '#24478F',
      hightlight: '#9CBA99'
    },
    {
      value: imagesArray[4].votes,
      label: 'fremont',
      color: '#1F3D7A',
      hightlight: '#9CBA99'
    },
    {
      value: imagesArray[5].votes,
      label: 'hello robin',
      color: '#1A3366',
      hightlight: '#9CBA99'
    },
    {
      value: imagesArray[6].votes,
      label: 'hilliards',
      color: '#142952',
      hightlight: '#9CBA99'
    },
    {
      value: imagesArray[7].votes,
      label: 'hot cakes',
      color: '#9CBABA',
      hightlight: '#9CBA99'
    },
    {
      value: imagesArray[8].votes,
      label: 'molly-moon',
      color: '#33ADFF',
      hightlight: '#9CBA99'
    },
    {
      value: imagesArray[9].votes,
      label: 'rainier',
      color: '#4DB8FF',
      hightlight: '#9CBA99'
    },
    {
    value: imagesArray[10].votes,
      label: 'starbucks',
      color: '#66C2FF',
      hightlight: '#9CBA99'
    },
    {
    value: imagesArray[11].votes,
      label: 'top pot',
      color: '#80CCFF',
      hightlight: '#9CBA99'
    },
    {
    value: imagesArray[12].votes,
      label: 'victrola',
      color: '#99D6FF',
      hightlight: '#9CBA99'
    }
  ];

  var context =document.getElementById('chart').getContext('2d');

  var seattleChart = new Chart(context).Doughnut(data, {
    animationSteps: 50,
    animationEasing: "easeOutBounce",
    animateRotate:  false,
    animateScale: false

  });
};


// convert Image object to JSON

// var jsonImage = JSON.stringify(imagesArray[0].votes);

// // set local storage item
// localStorage.setItem(imagesArray[0].votes,jsonImage);

// // get local storage item
// var storedImage = localStorage.getItem('votes');

// //decode from JSON to tracker object
// var parseImage = JSON.parse(storedImage);

chartData();
