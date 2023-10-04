// click action listeners for navbar buttons
$(".navbar-logo").click(() => {
    window.location.href = "/" 
})
$("#home-button-1").click(() => { 
    $('html, body').animate({scrollTop:0}, 'slow');
})
$("#about-button-1").click(() => { 
    document.querySelector(".about-panel-header").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }) 
})
$("#members-button-1").click(() => { 
    document.querySelector(".members-panel-header").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }) 
})
$("#discography-button-1").click(() => { 
    document.querySelector(".discography-panel-header").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }) 
})


$("#home-button-2").click(() => { 
    $('html, body').animate({scrollTop:0}, 'slow');
    setTimeout(function() {
        $(".menu-modal").css('opacity', '0')
        $(".menu-modal").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".menu-modal").css("display", "none")
    }, 100)
})
$("#about-button-2").click(() => { 
    document.querySelector(".about-panel-header").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }) 
    setTimeout(function() {
        $(".menu-modal").css('opacity', '0')
        $(".menu-modal").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".menu-modal").css("display", "none")
    }, 100)
})
$("#members-button-2").click(() => {
    document.querySelector(".members-panel-header").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }) 
    setTimeout(function() {
        $(".menu-modal").css('opacity', '0')
        $(".menu-modal").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".menu-modal").css("display", "none")
    }, 100)
})
$("#discography-button-2").click(() => { 
    document.querySelector(".discography-panel-header").scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }) 
    setTimeout(function() {
        $(".menu-modal").css('opacity', '0')
        $(".menu-modal").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".menu-modal").css("display", "none")
    }, 100)
})


// hover event listener for navbar-buttons
$(".navbar-button3").mouseenter((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "19px")
})

$(".navbar-button3").mouseleave((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "16px")
})

$(".navbar-button2").mouseenter((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "24px")
})

$(".navbar-button2").mouseleave((e) => {
    const element_id = e.currentTarget.closest('.navbar-button').getAttribute("id")
    $("#" + element_id).css("transition-duration", "1s")
    $("#" + element_id).css("-webkit-transition-duration", "1s")
    $("#" + element_id).css("font-size", "18px")
})

// click event listener for hamburger
$(".navbar-hamburger").click(() => {
    $(".menu-modal").css("display", "block")
    setTimeout(function() {
        $(".menu-modal").css('opacity', '1')
        $(".menu-modal").css('transform', 'translateY(0)')
    }, 10);
})

// event listener for window resize
function adjust_window() {
    if(window.visualViewport.width > 1000) {
        $(".menu-modal").css("display", "none")
    }
}
window.onresize = adjust_window

// click event listener for menu exit button
$(".exit-button").click(() => {
    setTimeout(function() {
        $(".menu-modal").css('opacity', '0')
        $(".menu-modal").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".menu-modal").css("display", "none")
    }, 100)
})