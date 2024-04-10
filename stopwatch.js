let stopwatch;
let isRunning = false;
let time =0;

function formateTime(timeInsecond) {
    const hour = Math.floor(timeInsecond/3600);
    const minute = Math.floor((timeInsecond % 3600) /60) ;
    const second = Math.floor(timeInsecond % 60); 
    
   
    return `${String(hour).padStart(2,'0')}: ${String(minute).padStart(2,'0')}:${String(second).padStart(2,'0')}`
}

function updateTime() {
  document.getElementById('stopwatch').textContent = formateTime(time);
  time++;
  console.log(time)
  document.body.style.backgroundColor = getColor()
}

function startStopwatch() {
   if( !isRunning ){
      stopwatch = setInterval(updateTime,1000);
      isRunning = true;
   }
}

function stopStopwatch() {
  clearInterval(stopwatch);
  isRunning= false;
}

function reset() {
stopStopwatch();
time=0
updateTime()
}
function getColor() {
    const randomColor = Math.floor(Math.random() * 16777235);
    return '#' + randomColor.toString(16);
}