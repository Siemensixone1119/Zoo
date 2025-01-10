const arr = [
  {
    src: "./image/reviews_image_1.jpg",
    name: "Mba Jennie",
    grade: "4.5",
    comment: "“ Suka banget sama mas mas disini ramah ramah, anabulku jadi canteekk makin gemoy jadinya... “",
  },
  {
    src: "./image/reviews_image_2.jpg",
    name: "Jennie Mba",
    grade: "5.0",
    comment: "“ Pelayanan bagus banget, tempat bersих и nyaman, hasilnya memуaskan! “",
  },
  {
    src: "./image/reviews_image_3.jpg",
    name: "Maba Mebe",
    grade: "4.0",
    comment: "“ Harga terjangkau, staf ramah, и anabulku terlihat sangat senang terlihat sangat senang! “",
  },
];

const sliderImages = document.querySelectorAll(".review__slide");
const sliderBtn = document.querySelectorAll(".review__btn");
const gradeImg = document.querySelector(".review__grade-img");
const gradeName = document.querySelector(".review__name");
const gradeNum = document.querySelector(".review__grade-num");
const gradeComment = document.querySelector(".review__comment");
let mainSlideIndex = 0;

const slider = (index) => {
  sliderImages.forEach((img, i) => {
    const newIndex = (index + i) % arr.length;
    img.src = arr[newIndex].src;
  });

  const centralIndex = (index + 1) % arr.length; // Центральный слайд
  gradeImg.src = arr[centralIndex].src;
  gradeName.textContent = arr[centralIndex].name;
  gradeNum.textContent = arr[centralIndex].grade;
  gradeComment.textContent = arr[centralIndex].comment;

  mainSlideIndex = index; // Сохраняем текущий индекс
};

sliderBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("review__btn-prev")) {
      let index = mainSlideIndex - 1;
      if (index < 0) {
        index = arr.length - 1;
      }
      slider(index);
    } else if (event.currentTarget.classList.contains("review__btn-next")) {
      let index = mainSlideIndex + 1;
      if (index >= arr.length) {
        index = 0;
      }
      slider(index);
    }
  });
});

slider(mainSlideIndex);
