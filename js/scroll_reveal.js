export default function scrollReveal() {
  const reveals = document.querySelectorAll(".reveal"),
    pShow = document.querySelectorAll(".p-show");


  const observerReveal = new IntersectionObserver(function(entries, observe) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("contentReveal")
      } else {
        entry.target.classList.remove("contentReveal")
      }
    })
  })

reveals.forEach((el) => observerReveal.observe(el));


const observePShow = new IntersectionObserver(function(entries, observe) {
entries.forEach((entry) => {
if (entry.isIntersecting) {
  entry.target.classList.add("home-slide-up-fade-in")
} else {
  entry.target.classList.remove("home-slide-up-fade-in")
}
})
})

pShow.forEach((el) => observePShow.observe(el))

} 
