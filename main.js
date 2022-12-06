document.getElementById("btn").addEventListener("click", () => {
  if (window.DeviceMotionEvent && window.DeviceMotionEvent.requestPermission) {
    DeviceMotionEvent.requestPermission()
      .then((state) => {
        if (state === "granted") {
          window.addEventListener(
            "devicemotion",
            (event) => {
              var x = event.accelerationIncludingGravity.x;
              var y = event.accelerationIncludingGravity.y;
              var z = event.accelerationIncludingGravity.z;
              document.getElementById("x").innerText(x);
            },
            true
          );
          alert("計測を開始します。");
        } else {
          alert("加速度の計測を許可してください。");
        }
      })
      .catch((err) => console.error(err));
  } else {
    alert("エラーが発生しました。");
  }
});
