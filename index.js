const button = document.getElementById("clickme");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");

console.log(video1);
console.log(video2);
console.log(video3);
// button.addEventListener("click", () => {
//   console.log("you clicked me");
//   alert("clicked!");
// });

const showvideo1 = () => {
  console.log("function 1 ran");
  video1.classList.toggle("hidden");
};

const showvideo2 = () => {
  console.log();
  video2.classList.toggle("hidden");
};

const showvideo3 = () => {
  console.log();
  video3.classList.toggle("hidden");
};
