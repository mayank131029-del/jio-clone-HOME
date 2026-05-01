const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active")

  if (menu.classList.contains("active")) {
    hamburger.innerHTML = `<img src="images/close.svg" alt="">`
  }
  else {
    hamburger.innerHTML = `<img src="images/hamburger.svg" alt="">`

  }
})


let prev = document.querySelector(".prev");
let nex = document.querySelector(".next");
let slideContainer = document.querySelector(".slides");
let slides = document.querySelectorAll(".ss");
let mainslidewidth = slides[0].clientWidth + 15
let currentIndex = 0;
function updateSlideWidth() {
  mainslidewidth = slides[0].clientWidth;
  slideContainer.style.transition = "none"; // avoid animation jump
  slideContainer.style.transform = `translateX(-${mainslidewidth * currentIndex}px)`;
}

// Call initially
updateSlideWidth();

// Update on resize
window.addEventListener("resize", updateSlideWidth);

function updateSlide() {
  slideContainer.style.transform = `translateX(-${mainslidewidth * currentIndex}px)`;
  slideContainer.style.transition = "transform 0.5s ease";
} 
nex.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // loop back
  }
  updateSlide();
});

prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // loop to last
  }
  updateSlide();
})

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length
  updateSlide(currentIndex)
}, 3000);




// let currentIndex = 0;

// function updateSlide() {
//   slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//   slideContainer.style.transition = "transform 0.5s ease";
// }

// nex.addEventListener("click", () => {
//   if (currentIndex < slides.length - 1) {
//     currentIndex++;
//   } else {
//     currentIndex = 0; // loop back
//   }
//   updateSlide();
// });

// prev.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//   } else {
//     currentIndex = slides.length - 1; // loop to last
//   }
//   updateSlide();
// });

// setInterval(() => {
//   currentIndex = (currentIndex + 1) % slides.length
//   updateSlide(currentIndex)
// }, 3000);


let mobileBtn = document.querySelector(".bigbtn1")
let homeBtn = document.querySelector(".bigbtn2")
let bgbtn = document.querySelector(".big-btn-bg")
let input = document.querySelector(".input")
let span = document.createElement("span")
let nobox = document.querySelector(".no-box")

homeBtn.addEventListener("click", () => {
  bgbtn.style.left = `51%`
  homeBtn.style.color = "white"
  mobileBtn.style.color = "#0a2885"
  document.querySelector(".bigbtn2 img").style.filter = `invert(1)`
  document.querySelector(".bigbtn1 img").style.filter = `invert(1)`
  input.after(span)
  span.innerHTML = `<img src="images/information.svg" alt="">`
  span.classList.add(`info-img`)
  // nobox.style.justifyContent = `left`
  input.placeholder = `JioHome Number`
  document.querySelector(".prefix").style.display = `none`
})
mobileBtn.addEventListener("click", () => {
  bgbtn.style.left = `1%`
  homeBtn.style.color = "#0a2885"
  mobileBtn.style.color = "white"
  document.querySelector(".bigbtn2 img").style.filter = `invert(0)`
  document.querySelector(".bigbtn1 img").style.filter = `invert(0)`
  document.querySelector(".prefix").style.display = `block`
  document.querySelector(".input").placeholder = `Jio Number`
  span.remove()

})
let html = document.body
let close = document.getElementById("close-btn")
let popup = document.querySelector("#imformation-popup")
let overlay = document.querySelector(".overlay")
span.addEventListener("click", () => {
  overlay.style.display = `flex`
  span.style.display = `none`
  document.body.style.overflow = `hidden`
})
close.addEventListener("click", () => {
  overlay.style.display = `none`
  span.style.display = `flex`
  document.body.style.overflow = `auto`

})
window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = `none`
    span.style.display = `block`

  }
})
let fnext = document.querySelector(".feature-buttons .next")
let fprev = document.querySelector(".feature-buttons .prev")
let fSlidesContainer = document.querySelector(".feature-slider")
let fSlides = document.querySelectorAll(".common")
let visibleSliders = 3
let slidewidth = fSlides[0].offsetWidth + 40
let currentIndex1 = 0
let baseOffset = window.innerWidth > 768 ? 450 : 20;

function updateBaseOffset() {
  baseOffset = window.innerWidth > 768 ? 450 : 20;
  updatefSlider(); // refresh slider position when window size changes
}
window.addEventListener("resize", updateBaseOffset);



function updatevisibleSliders() {
  visibleSliders = window.innerWidth > 768 ? 3 : 1;
  updatefSlider(); // refresh slider position when window size changes
}
window.addEventListener("resize", updatevisibleSliders);


function updatefSlider() {
  if (currentIndex1 === 0) {
    fprev.classList.add("disable")
  }
  else {
    fprev.classList.remove("disable")
  }

  if (currentIndex1 >= fSlides.length - visibleSliders) {
    fnext.classList.add("disable")
  }
  else {
    fnext.classList.remove("disable")
  }
  fSlidesContainer.style.transform = `translateX(${baseOffset - (slidewidth * currentIndex1)}px)`
  fSlidesContainer.style.transition = "transform 0.5s ease-in-out";
}

fnext.addEventListener("click", () => {
  if (currentIndex1 < fSlides.length - visibleSliders) {
    currentIndex1++
  }
  updatefSlider()

})
fprev.addEventListener("click", () => {
  if (currentIndex1 > 0) {
    currentIndex1--
  }
  updatefSlider()
})

updatefSlider()





let snext = document.querySelector(".stories-buttons .next")
let sprev = document.querySelector(".stories-buttons .prev")
let sSlidesContainer = document.querySelector(".Stories-slide")
let sSlides = document.querySelectorAll(".common2")
let currentIndex2 = 0
function updatesSlider() {
  if (currentIndex2 === 0) {
    sprev.classList.add("disable")
  }
  else {
    sprev.classList.remove("disable")
  }

  if (currentIndex2 >= sSlides.length - visibleSliders) {
    snext.classList.add("disable")
  }
  else {
    snext.classList.remove("disable")
  }
  sSlidesContainer.style.transform = `translateX(${baseOffset - (slidewidth * currentIndex2)}px)`
  sSlidesContainer.style.transition = "transform 0.5s ease-in-out";
}

snext.addEventListener("click", () => {
  if (currentIndex2 < sSlides.length - visibleSliders) {
    currentIndex2++
  }
  updatesSlider()

})
sprev.addEventListener("click", () => {
  if (currentIndex2 > 0) {
    currentIndex2--
  }
  updatesSlider()
})

updatesSlider()