function handleMotionEvent(event) {
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;
  document.getElementById("x").innerText(x);
  // Do something awesome.
}

window.addEventListener("devicemotion", handleMotionEvent, true);
