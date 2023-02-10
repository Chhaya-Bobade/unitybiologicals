let slide_left_btn = document.getElementById('slides-left')
let slide_right_btn = document.getElementById('slides-right')

let left_slider = document.getElementById('left_sliders')
let right_slider = document.getElementById('right_sliders')

let num_of_slides = right_slider.querySelectorAll('.slides').length
let current_slide = 1;

slide_left_btn.addEventListener('click', function(e) {
  slide_left()
})

slide_right_btn.addEventListener('click', function(e) {
  slide_right()
})

function slide_left(){

  if (current_slide === 1) {
    current_slide = 3
  } else {
    current_slide--
  }

  document.querySelectorAll('.slides').forEach(function(slide) {
    slide.style.transform = `translateX(-${(current_slide - 1) * 100}%)`
  })
}

function slide_right(){

  if (current_slide === num_of_slides) {
    current_slide = 1
  } else {
    current_slide++
  }

  document.querySelectorAll('.slides').forEach(function(slide) {
    slide.style.transform = `translateX(-${(current_slide - 1) * 100}%)`
  })
}

let auto = setInterval(function(){
  slide_right()
}, 3000);