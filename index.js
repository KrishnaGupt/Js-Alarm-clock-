console.log("This is alarm clock project");
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const timer = document.getElementById("time");
  const date = document.getElementById("date");
  let dVal = date.value;
  let tVal = timer.value;
  const audio = document.createElement("audio");
  audio.setAttribute("src", "Morning Nights.mp3");
  // console.log(tVal);
  if (timer.value == "" || date.value == "") {
    let messege = document.querySelector("#message");
    messege.innerHTML = `<div class="alert alert-danger" style="background: red; margin: 5px; padding: 5px; border-radius: 10px"><div>
        Sorry, you cannot add a blank alarm!
        </div>
      </div>`;
    // automatically disappear of the error
    setTimeout(() => {
      messege.innerHTML = "";
    }, 5000);
  } else {
    alert(`Your alarm has been set for ${dVal} ${tVal}`);
    setInterval(function () {
      let realHours = new Date().getHours();
      let realMinutes = new Date().getMinutes();
      let realDate = new Date().getDate();
      let realMonth = new Date().getMonth();
      let realYear = new Date().getFullYear();
      if (realMonth < "10") {
        realMonth = `0${realMonth + 1}`;
      } else {
        realMonth = `${realMonth + 1}`;
      }

      if (realMinutes < "10") {
        realMinutes = `0${realMinutes}`;
      } else {
        realMinutes = `${realMinutes}`;
      }
      let aVal = `${realYear}-${realMonth}-${realDate}`;
      let alVal = `${realHours}:${realMinutes}`;
      // console.log(alVal);
      if (dVal == aVal && tVal == alVal) {
        console.log("alarm time");
        audio.play();
      }
    }, 1000);
  }
});
