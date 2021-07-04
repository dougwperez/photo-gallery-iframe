function onReady(callback) {
  var imagesLoaded = 0;
  // Count the total number of images on the page when the page has loaded.
  var totalImages = document.querySelector("img").length;
  console.log("totalImages!!", totalImages);
  var intervalId = window.setInterval(function () {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      console.log("loading");
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}

onReady(function () {
  setVisible("#photos", true);
  setVisible("#loading", false);
});
