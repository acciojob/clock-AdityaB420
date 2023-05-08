//your JS code here. If required.
var startTime = Date.now();
      setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        var hours = Math.floor(elapsedTime / 3600000);
        var minutes = Math.floor((elapsedTime % 3600000) / 60000);
        var seconds = Math.floor((elapsedTime % 60000) / 1000);
        var timerElement = document.getElementById("timer");
        timerElement.innerHTML = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
      }, 1000);

      function formatTime(time) {
        if (time < 10) {
          return "0" + time;
        } else {
          return time;
        }
      }
    



