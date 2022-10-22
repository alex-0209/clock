function clock() {
  const fullDate = new Date();
  let hour = fullDate.getHours();
  let minute = fullDate.getMinutes();
  let second = fullDate.getSeconds();
  
  
  const hour_span = document.querySelector('#hour');
  const minute_span = document.querySelector('#minute');
  const second_span = document.querySelector('#second');
  
  if(hour < 10) { hour = '0' + hour}
  if(minute < 10) { minute = '0' + minute}
  if(second < 10) { second = '0' + second}

  hour_span.innerHTML = `${hour} :`;
  minute_span.innerHTML = `${minute} :`;
  second_span.innerHTML = `${second} `;
}

setInterval(clock,1000);
