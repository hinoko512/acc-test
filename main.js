var count = 1;

function handleMotionEvent(event) {
  var x = event.accelerationIncludingGravity.x;
  var y = event.accelerationIncludingGravity.y;
  var z = event.accelerationIncludingGravity.z;
  document.getElementById("x").innerText(x);
  let text = document.getElementById("text");
  if (text.textContent === "a") {
    text.innerText = count++;
  }
  // Do something awesome.
}

window.addEventListener("devicemotion", handleMotionEvent, true);
