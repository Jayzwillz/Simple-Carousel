let previousBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let imageContainer = document.getElementById("display-div");

let images = [
  "https://i.abcnewsfe.com/a/f43853f3-9eaf-4048-9ae7-757332c5787e/mclaren-1-ht-gmh-240412_1712928561648_hpMain_16x9.jpg?w=1600",
  "https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg",
  "https://i.ytimg.com/vi/0id5rVsErUw/maxresdefault.jpg",
  "https://eu-images.contentstack.com/v3/assets/blt0bbd1b20253587c0/blt4bf1a4090380d5b0/651579e1a95ca40cf4969a68/00-Divo_BUGATTI.jpg?disable=upscale&width=1200&height=630&fit=crop",
  "https://news.dupontregistry.com/wp-content/uploads/2018/02/8901McLaren-Senna-Victory-Grey-18.jpg",
  "https://di-uploads-pod12.dealerinspire.com/universitydodgeram/uploads/2018/07/2018-Dodge-Challenger-SRT-Demon-University-Dodge.jpg",
  "https://robbreport.com/wp-content/uploads/2016/01/5854-mclaren570scoupe-mantisgreen-0051.jpg",
];

let index = 0;

function updatePicture() {
  imageContainer.innerHTML = `<img src="${images[index]}" alt="Car ${index + 1}" />`;
}

previousBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updatePicture();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updatePicture();
});

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    previousBtn.click();
  } else if (e.key === "ArrowRight") {
    nextBtn.click();
  }
});

// Initialize the carousel
document.addEventListener("DOMContentLoaded", () => {
  updatePicture();
});
