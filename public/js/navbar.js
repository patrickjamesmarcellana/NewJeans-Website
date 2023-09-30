$(".navbar-logo").click(() => {
    window.location.href = "/"
})

$("#home-button").click(() => {
    window.location.href = "/";
})

$("#members-button").click(() => {
    window.location.href = "/members"
})

$("#discography-button").click(() => {
    window.location.href = "/discography"
})

$("#awards-button").click(() => {
    window.location.href = "/awards"
})

$("#performances-button").click(() => {
    window.location.href = "/performances"
})

$("#gallery-button").click(() => {
    window.location.href = "/gallery"
})

// handle style of navbar button where the window is currently at
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

let button_id = ""
switch(queryString) {
    case "": button_id = "#home-button"; break;
    case "members": button_id = "#members-button"; break;
    case "discography": button_id = "#discography-button"; break;
    case "awards": button_id = "#awards-button"; break;
    case "performances": button_id = "#performances-button"; break;
    case "gallery": button_id = "#gallery-button"; break;
}

$(button_id).css("font-weight", "900")
$(button_id).css("filter", "drop-shadow(0px 4px 6px #3C3C3C)")
$(button_id).css("text-decoration", "underline")