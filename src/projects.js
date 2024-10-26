const cards = document.querySelectorAll(".project")
const project_container = document.querySelector(".projects_container")
let screen_size = window.innerWidth

let sleeping = false
let current_index = 1
const update_index = function () {
    document.querySelector("article.card.selected").classList.remove("selected")
    cards[current_index].querySelector("article").classList.add("selected")

    cards[(current_index > 0) ? current_index - 1 : cards.length - 1].id = "left"
    cards[current_index].id = "middle"
    cards[(current_index < cards.length - 1) ? current_index + 1 : 0].id = "right"
    sleeping = true
    setTimeout(() => {sleeping = false}, 200)
}

document.querySelectorAll("article.card").forEach(card => {
    card.addEventListener("mouseover", () => {
        if (window.innerWidth >= 1200) {
            document.querySelector("article.card.selected").classList.remove("selected")
            card.classList.add("selected")
        }
    })
})


project_container.addEventListener("wheel", (event) => {
    if (event.shiftKey && !sleeping) {
        if (event.deltaY < 0) {
            current_index++
        } else {
            current_index--
        }

        if (current_index < 0) {
            current_index = cards.length - 1
        } else if (current_index >= cards.length) {
            current_index = 0
        }

        update_index()
    }
})

let mouse_X

project_container.addEventListener('touchstart', (event) => {
    mouse_X = event.touches[0].clientX
})

project_container.addEventListener('touchmove', (event) => {
    const diff = mouse_X - event.touches[0].clientX

    if (Math.abs(diff) > 50 && !sleeping) {
        event.preventDefault();

        if (diff > 0) {
            current_index++
        } else {
            current_index--
        }

        if (current_index < 0) {
            current_index = cards.length - 1
        } else if (current_index >= cards.length) {
            current_index = 0
        }

        update_index()
        
    }
});

window.onresize = () => {
    if (screen_size >1400 && window.innerWidth <= 1400) {
        current_index = [...cards].indexOf(document.querySelector("article.card.selected").parentElement)
        update_index()
    }

    screen_size = window.innerWidth
}