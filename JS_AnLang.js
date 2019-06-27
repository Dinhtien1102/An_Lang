var ten = ['li', 'toan', "van", "hoa"];
var text = "";
var i;
for (i = 0; i < 4; i++) { 
  text += "<li>" + ten[i] + "</li>";
}
document.getElementById("demo").innerHTML=text;
// console.log(fruits[fruits.length - 1]);
// var first = fruits[0];
// Apple

// var last = fruits[fruits.length - 1];
// fruits.forEach(function(item, index, array) {
//     console.log(item, index, array);
//   });
// var x=7;
// var y=9;
// var z= x*y;
// document.getElementById("demo").innerHTML=z;