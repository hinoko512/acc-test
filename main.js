document.getElementById("btn").addEventListener("click", () => {
  if (window.DeviceMotionEvent && window.DeviceMotionEvent.requestPermission) {
    DeviceMotionEvent.requestPermission()
      .then((state) => {
        if (state === "granted") {
          window.addEventListener(
            "devicemotion",
            (event) => {
              if (event.accelerationIncludingGravity) {
                // 加速度を計測する
                var x = event.accelerationIncludingGravity.x;
                var y = event.accelerationIncludingGravity.y;
                var z = event.accelerationIncludingGravity.z;
                // 画面上に加速度を表示する
                document.getElementById("x").textContent = x;
                document.getElementById("y").textContent = y;
                document.getElementById("z").textContent = z;
              } else {
                alert("event.accelerationIncludingGravity is null");
              }
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
