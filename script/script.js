const img = document.querySelector(".img1");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

console.dir(img);
console.log(img.attributes[0].value);

// img.attributes[0].value = "./image/Dachshund 1.png";
// img.attributes[0].value = "./image/Dachshund 3.png";
// img.attributes[0].value = "./image/close-up-of-pomeranian-dog 1.png";

const dogs = [
  "./image/close-up-of-pomeranian-dog 1.png",
  "./image/Dachshund 1.png",
  "./image/Dachshund 3.png"
];

let i = 0;

right.addEventListener("click", function () {
  if (i === 2) {
    i = 0;
  } else {
    i++;
  }
  img.attributes[0].value = dogs[i];
  img2.attributes[0].value = dogs[i === 0 ? 2 : i - 1];
  img3.attributes[0].value = dogs[i === 2 ? 0 : i + 1];
});

left.addEventListener("click", function () {
  if (i === 0) {
    i = 2;
  } else {
    i = i - 1;
  }

  img.attributes[0].value = dogs[i];
  img2.attributes[0].value = dogs[i === 0 ? 2 : i - 1];
  img3.attributes[0].value = dogs[i === 2 ? 0 : i + 1];
});
