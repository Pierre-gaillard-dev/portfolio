const cards = document.querySelectorAll(".project")
const project_container = document.querySelector(".projects_container")
let screen_size = window.innerWidth

let sleeping = false
let current_index = 1

document.querySelectorAll(".projects_container img").forEach(img => {img.setAttribute("draggable", false)})

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
        event.preventDefault();

        if (event.deltaY < 0) {
            current_index++;
        } else {
            current_index--;
        }

        if (current_index < 0) {
            current_index = cards.length - 1;
        } else if (current_index >= cards.length) {
            current_index = 0;
        }

        update_index();
    }
});


let mouse_X
let dragging = false

project_container.addEventListener('touchstart', (event) => {
    mouse_X = event.touches[0].clientX
    dragging = true
})

project_container.addEventListener('touchmove', (event) => {
    const diff = mouse_X - event.touches[0].clientX

    if (Math.abs(diff) > 50 && !sleeping && dragging) {
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
        mouse_X = event.clientX
        update_index()
        dragging = false
        
    }
});


project_container.addEventListener("mousedown", (event) => {
    mouse_X = event.clientX
    dragging = true
})

project_container.addEventListener("mousemove", (event) => {
    const diff = mouse_X - event.clientX

    if (Math.abs(diff) > 50 && !sleeping && dragging) {
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

        mouse_X = event.clientX
        update_index()
        dragging = false
    }
})

document.addEventListener("mouseup", () => {
    dragging = false
})

window.onresize = () => {
    if (screen_size >1400 && window.innerWidth <= 1400) {
        current_index = [...cards].indexOf(document.querySelector("article.card.selected").parentElement)
        update_index()
    }

    screen_size = window.innerWidth
}
