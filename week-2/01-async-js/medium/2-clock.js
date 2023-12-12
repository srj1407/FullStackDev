setInterval(function () {
  const date = new Date();
  const hours = date.getHours(); // Hours (0-23)
  const minutes = date.getMinutes(); // Minutes (0-59)
  const seconds = date.getSeconds();
  let time1 = hours + ":" + minutes + ":" + seconds;
  let time2 = "";
  if (hours >= 12) {
    time2 = (hours % 12) + ":" + minutes + ":" + seconds + " PM";
  } else {
    time2 = hours + ":" + minutes + ":" + seconds + " AM";
  }
  console.log(time1, time2);
}, 1000);
