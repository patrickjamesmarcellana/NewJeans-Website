const first_photo = {
    element: document.querySelector(".about-panel-photo"),
    already_seen: false
}

const header_element = {
    element: document.querySelector(".about-panel-header"),
    already_seen: false
}

const content_element = {
    element: document.querySelector(".about-panel-content"),
    already_seen: false
}

const second_photo = {
    element: document.querySelector(".members-panel-photo"),
    already_seen: false
}

const members_header = {
    element: document.querySelector(".members-panel-header"),
    already_seen: false
}

const members_elements = document.querySelectorAll(".member-photo")
let members_arr = []
for(let x = 0; x < 5; x++) {
    members_arr.push({
        element: members_elements[x],
        already_seen: false
    })
}

const discography_panel_photo = {
    element: document.querySelector(".discography-panel-photo"),
    already_seen: false
}

const discography_header = {
    element: document.querySelector(".discography-panel-header"),
    already_seen: false
}

const discography_elements = document.querySelectorAll(".album-photo")
let discography_arr = []
for(let x = 0; x < 6; x++) {
    discography_arr.push({
        element: discography_elements[x],
        already_seen: false
    })
}

function apply_animation(element, animation, settings) {
    const bounding = element.element.getBoundingClientRect();
    if (!element.already_seen && bounding.top + (bounding.height / 2) > 0 && bounding.left + (bounding.width/2) > 0 && bounding.left + (bounding.width/2) < (window.innerWidth || document.documentElement.clientWidth) && bounding.top + (bounding.height / 2) < (window.innerHeight || document.documentElement.clientHeight)) {
        element.element.style.visibility = "visible"
        element.element.animate(animation, settings)
        element.already_seen = true;
    }
}

apply_animation(first_photo, { transform: ['translateX(400%)', 'translateX(0)'] },
{ duration: 1000, fill: 'forwards', easing: 'ease-out' })


$(window).on('scroll', () => {
    apply_animation(first_photo, { transform: ['translateX(400%)', 'translateX(0)'] },
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    apply_animation(header_element, { transform: ['translateX(-400%)', 'translateX(0)'] }, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    apply_animation(content_element, { transform: ['translateX(400%)', 'translateX(0)']}, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    apply_animation(second_photo, { transform: ['translateX(-400%)', 'translateX(0)'] },
    { duration: 500, fill: 'forwards', easing: 'ease-out' })

    /* Members Part Animations */
    apply_animation(members_header, { transform: ['translateX(400%)', 'translateX(0)']}, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    for(let x = 0; x < 5; x++) {
        apply_animation(members_arr[x], { transform: ['translateY(-30%)', 'translateY(0)'], opacity: ['0', '1']}, 
        { duration: 1000, fill: 'forwards', easing: 'ease-out' })
    }

    apply_animation(discography_panel_photo, { transform: ['translateX(400%)', 'translateX(0)'] },
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    apply_animation(discography_header, { transform: ['translateX(-400%)', 'translateX(0)']}, 
    { duration: 500, fill: 'forwards', easing: 'ease-out' })
    for(let x = 0; x < 6; x++) {
        apply_animation(discography_arr[x], { transform: ['translateY(-30%)', 'translateY(0)'], opacity: ['0', '1']}, 
        { duration: 1000, fill: 'forwards', easing: 'ease-out' })
    }
})

/* Members Photo Hover Effect */
$(".member").mouseenter((e) => {
    const element_id = e.currentTarget.closest('.member').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("transform", "scale(1.3)")
    $("#" + element_id).css("z-index", "10")
    $("#" + element_id).css("filter", "drop-shadow(4px 4px 8px #3C3C3C)")
})

$(".member").mouseleave((e) => {
    const element_id = e.currentTarget.closest('.member').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("transform", "scale(1)")
    $("#" + element_id).css("z-index", "0")
    $("#" + element_id).css("filter", "none")
})

/* Albums Photo Hover Effect */
$(".album").mouseenter((e) => {
    const element_id = e.currentTarget.closest('.album').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("transform", "scale(1.3)")
    $("#" + element_id).css("z-index", "10")
    $("#" + element_id).css("filter", "drop-shadow(4px 4px 8px #3C3C3C)")
})

$(".album").mouseleave((e) => {
    const element_id = e.currentTarget.closest('.album').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("transform", "scale(1)")
    $("#" + element_id).css("z-index", "0")
    $("#" + element_id).css("filter", "none")
})

/* Storing user's device details in a variable*/
let details = navigator.userAgent;
  
/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;
  
/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);
  
if (isMobileDevice) {
    $(".about-panel-header").css("padding-right", "2em")
    $(".about-panel-content").css("padding-right", "0")
    $(".members-panel").css("padding-right", "0")
    $(".members-panel-header").css("padding-right", "0.1em")
    $(".navbar-panel").css("padding-right", "0")
    $(".menu-modal").css("padding-right", "0px")
    $(".members-list").css("padding-right", "0")
    $(".member-modal").css("padding-right", "0px")
    $(".album-modal").css("padding-right", "0px")
    $(".album-main-box").css("border-radius", "0")
    $(".main-box").css("border-radius", "0")
}