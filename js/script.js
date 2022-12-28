// let twitter = document.getElementById("twitter");
// (facebook = document.getElementById("facebook")),
//   (youtube = document.getElementById("youtube"));

// let twitterCounter = 0,
//   facebookCounter = 0,
//   youtubeCounter = 0;
// let twcounter = setInterval(function () {
//   twitterCounter += 50;

//   twitter.innerHTML = twitterCounter;

//   if (twitterCounter === 7500) {
//     clearInterval(twcounter);
//   }
// }, 1);

// let facounter = setInterval(function () {
//   facebookCounter += 50;

//   facebook.innerHTML = facebookCounter;

//   if (facebookCounter === 5000) {
//     clearInterval(facounter);
//   }
// }, 1);

// let ycounter = setInterval(function () {
//   youtubeCounter += 50;
//   youtube.innerHTML = youtubeCounter;

//   if (youtubeCounter === 10000) {
//     clearInterval(ycounter);
//   }
// }, 1);

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const c = parseInt(counter.innerText);

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
