// mini database (hardcoded objects)
minji = {
    name: "Minji",
    stage_name: "Minji (민지)",
    birth_name: "Kim Minji (김민지)",
    birthdate: "May 07, 2004",
    nationality: "South Korean",
    position: "Vocalist",
    color: "Yellow",
    emoji: "Bear"
}

hanni = {
    name: "Hanni", 
    stage_name: "Hanni (하니)",
    birth_name: "Hanni Pham",
    birthdate: "October 6, 2004",
    nationality: "Vietnamese-Australian",
    position: "Vocalist",
    color: "Pink",
    emoji: "Bunny"
}

danielle = {
    name: "Danielle",
    stage_name: "Danielle (다니엘)",
    birth_name: "Danielle Marsh",
    birthdate: "April 11, 2005",
    nationality: "Korean-Australian",
    position: "Vocalist",
    color: "Green",
    emoji: "Dog/Sunflower"
}

haerin = {
    name: "Haerin",
    stage_name: "Haerin (해린)",
    birth_name: "Kang Haerin (강해린)",
    birthdate: "May 15, 2006",
    nationality: "South Korean",
    position: "Vocalist",
    color: "White",
    emoji: "Hamster/Cat"
}

hyein = {
    name: "Hyein",
    stage_name: "Hyein (혜인)",
    birth_name: "Lee Hyein (이혜인)",
    birthdate: "April 21, 2008",
    nationality: "South Korean",
    position: "Vocalist, Maknae",
    color: "Cyan",
    emoji: "Chick"
}

// click event listener for member photos
$(".member").click((e) => {
    const element_id = e.currentTarget.closest('.member').getAttribute("id")
    let member_object = {}
    switch(element_id) {
        case "minji": member_object = minji; break;
        case "haerin": member_object = haerin; break;
        case "hyein": member_object = hyein; break;
        case "danielle": member_object = danielle; break;
        case "hanni": member_object = hanni; break;
    }

    $(".member-modal-picture").attr("src", "static/img/" + element_id + "-main.png")
    $(".member-modal-name").text(member_object.name)
    $("#desc-stage-name").text(member_object.stage_name)
    $("#desc-birth-name").text(member_object.birth_name)
    $("#desc-birthdate").text(member_object.birthdate)
    $("#desc-nationality").text(member_object.nationality)
    $("#desc-position").text(member_object.position)
    $("#desc-color").text(member_object.color)
    $("#desc-emoji").text(member_object.emoji)

    $(".member-modal").css("display", "flex")
    setTimeout(function() {
        $(".main-box").css('opacity', '1')
        $(".main-box").css('transform', 'translateY(0)')
    }, 10);

})

// click event listener for menu exit button
$(".exit-button").click(() => {
    setTimeout(function() {
        $(".main-box").css('opacity', '0')
        $(".main-box").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".member-modal").css("display", "none")
    }, 100)
})

// exit on click outside the box
$(".member-modal").click(() => {
    setTimeout(function() {
        $(".main-box").css('opacity', '0')
        $(".main-box").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".member-modal").css("display", "none")
    }, 100)
})
$(".main-box").click((e) => {
    e.stopPropagation()
})