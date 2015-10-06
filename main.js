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


return time;
}
tickTock();
setInterval('tickTock()', 1000);


/* True hex clock code (hard mode)


function formatTime (num) {
  var hex = num.toString(16);
  hex = hex.length === 2 ? hex : "0" + hex;
  return hex.toUpperCase();
}


setInterval(function() {

  var now = new Date();

  var hours = formatTime(now.getHours());
  var minutes = formatTime(now.getMinutes());
  var seconds = formatTime(now.getSeconds());

  var timeStr =  '#' + hours + minutes + seconds;

  // $('h1').text(timeStr)
  // $('body').css('background-color', timeStr);

  document.querySelector('h1').textContent = (timeStr);
  document.body.style.backgroundColor = timeStr;

}, 1000); */
