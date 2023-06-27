export default function animationHomePage() {
    const homeFadeIn = document.querySelectorAll(".home-fade-in"),
      homeZoomOut = document.querySelectorAll(".home-zoom-out")

    const observeHomeFadeIn = new IntersectionObserver(function(entries, observe) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          } else {
            console.log(entry.target)
            entry.target.classList.add("slide-up-fade-in")
          }
        })
      })
      
      homeFadeIn.forEach((el) => observeHomeFadeIn.observe(el))

      const observeHomeZoomOut = new IntersectionObserver(function(entries, observe) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          } else {
            console.log(entry.target)
            entry.target.classList.add("zoom-out-fade-in")
          }
        })
      })
      
      homeZoomOut.forEach((el) => observeHomeZoomOut.observe(el))  
}