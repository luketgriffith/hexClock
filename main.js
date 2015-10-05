var tickTock= function (){
var clock= $('.clock');
var dt = new Date();
var hours= dt.getHours();
var minutes= dt.getMinutes();
var seconds= dt.getSeconds();
var ampm= (hours<12) ? 'AM' : 'PM';
var currentHours= (hours>12) ? '0'+(hours-12) : hours;
var currentMinutes= (minutes<10) ? '0'+minutes : minutes;
var currentSeconds= (seconds<10) ? '0'+seconds : seconds;
var timeString= '#'+ currentHours + currentMinutes + currentSeconds
var time= clock.text(timeString);
var time2 = currentHours + currentMinutes + currentSeconds;
var timeInt= Number(time2);
var body= $('body');
var color= (timeInt>99999) ? ('#'+timeInt) : ('#'+'0'+timeInt);
console.log(color);
body.css('background-color',  color);

// var hourNum = Number(hours);
// var minuteNum= Number(minutes);
// var secondsNum= Number()
// console.log(hourNum);
return time;
}
tickTock();
setInterval('tickTock()', 1000);


// var background= function(){
  
//   var clock = $('.clock');
//   var clockVal = parseInt(clock.text, 10);
//   console.log(clockVal);

//   // body.css({'background-color':''})
// }
// background();
// // setInterval('background()', 1000);