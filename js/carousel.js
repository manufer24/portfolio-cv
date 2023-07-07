export default function carousel() {
    const carousel = document.querySelector(".carousel"),
        arrowBtn = document.querySelectorAll(".arrow"),
        firstCardWidth = document.querySelector(".carousel-card").offsetWidth,
        carouselChildrens = [...carousel.children]

let isDragging = false, startX, startScrollLeft, timeoutId

//get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

//insert copies of the last few cards to begginning of the carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
})

//insert copies of the last few cards to begginning of the carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

// add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "arrow-left" ? -firstCardWidth : firstCardWidth; 
    })
})

const dragStart = (e) => {
    isDragging = true
    carousel.classList.add("dragging")
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    if (!isDragging) return
    // updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX -  startX)
} 

const dragStop = () => {
    isDragging = false
    carousel.classList.remove("dragging")
}

const autoPlay = () => {
    if(window.innerWidth < 800) return
    // autoPlay the carousel after 2500ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500)
}

autoPlay()

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth)
        carousel.classList.remove("no-transition")
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.offsetWidth
        carousel.classList.remove("no-transition")
    }

    //clear existing timeout and start autoplay if mouse is not hovering
    clearTimeout(timeoutId)
    if(!carousel.matches(":hover")) autoPlay()
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
carousel.addEventListener("scroll", infiniteScroll)
carousel.addEventListener("mouseenter", () => clearTimeout(timeoutId))
carousel.addEventListener("mouseleave", autoPlay)

}