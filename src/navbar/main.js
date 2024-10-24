var nav_menu = {
    opened : false,

    pop_up : document.getElementById("nav_bar_popup"),

    toogle : function() {
        if (this.opened) {
            this.close()
        } else {
            this.open()
        }
        //console.log(this.opened)
    },

    open : function() {
        this.opened = true
        //console.log(this.pop_up.classList)
        this.pop_up.classList.remove("closed")
        this.pop_up.classList.add("opened")
    },

    close : function() {
        this.opened = false
        this.pop_up.classList.remove("opened")
        this.pop_up.classList.add("closed")
    },

    init : function() {
        this.pop_up = document.getElementById("nav_bar_popup");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    nav_menu.pop_up = document.getElementById("nav_bar_popup")
    console.log(nav_menu.pop_up)
});
console.log("test")