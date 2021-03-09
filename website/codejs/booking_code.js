
function checkTime(i) {
  if (i < 10) {i = '0' + i;};

  return i;
}

function greetTime() {
  if (new Date().getHours() > 12) {
    document.getElementById('greet').innerHTML = 'Good afternoon';
  }

  if (new Date().getHours() > 19) {
    document.getElementById('greet').innerHTML = 'Good evening';
  }

}

function opencloseTime() {
  if (new Date().getHours() > 10) {
    document.getElementById('openclose').innerHTML = 'OPEN';
  }

  if (new Date().getHours() > 23) {
    document.getElementById('openclose').innerHTML = 'CLOSED';
  }
}
