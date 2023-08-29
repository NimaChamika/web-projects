const secondHand = document.getElementById("second-hand");
secondHand.style.transformOrigin = "bottom center";

const minuteHand = document.getElementById("minute-hand");
minuteHand.style.transformOrigin = "bottom center";

const hourHand = document.getElementById("hour-hand");
hourHand.style.transformOrigin = "bottom center";

var date = new Date();
var init_seconds = date.getSeconds();
var init_minutes = date.getMinutes();
var init_hours = date.getHours();
init_hours = init_hours > 12 ? init_hours - 12 : init_hours;

let second_hand_angle = init_seconds * 6;
secondHand.style.transform = `rotate(${second_hand_angle}deg)`;

let minute_hand_angle = init_minutes * 6 + init_seconds * 0.1;
minuteHand.style.transform = `rotate(${minute_hand_angle}deg)`;

let hour_hand_angle = init_hours * 30 + init_minutes * 0.5;
hourHand.style.transform = `rotate(${hour_hand_angle}deg)`;

//console.log(`${hours} ${minutes} ${seconds}`);

let prevT = 0;
let dt = 0;

const gameLoop = (timeStamp) => {
  let currentT = timeStamp;
  dt = (currentT - prevT) * 0.001;

  second_hand_angle = (second_hand_angle + dt * 6) % 360;

  secondHand.style.transform = `rotate(${second_hand_angle}deg)`;

  minute_hand_angle = (minute_hand_angle + dt / 10) % 360;
  minuteHand.style.transform = `rotate(${minute_hand_angle}deg)`;

  hour_hand_angle = (hour_hand_angle + dt / 120) % 360;
  hourHand.style.transform = `rotate(${hour_hand_angle}deg)`;

  requestAnimationFrame(gameLoop);

  prevT = currentT;
};

requestAnimationFrame(gameLoop);
