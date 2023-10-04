// mini database (hardcoded objects)
nwjns = {
    name: "New Jeans",
    code: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1HMLpmZAnNyl9pxvOnTovV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
}

omg = {
    name: "omg",
    code: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/45ozep8uHHnj5CCittuyXj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
}

getup = {
    name: "Get Up",
    code: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4N1fROq2oeyLGAlQ1C1j18?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
}

gods = {
    name: "Gods",
    code: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/0rAaP1OBxVCn2cIUZNjGRs?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
}

atcy = {
    name: "Beautiful Restriction",
    code: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5qHH0SHWf5yQxG4yqHnIzY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
}

bwya = {
    name: "Beautiful Restriction",
    code: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1Pk1W5xbmAqG6wBNL4sjq5?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
}


// click event listener for member photos
$(".album").click((e) => {
    const element_id = e.currentTarget.closest('.album').getAttribute("id")
    let album_object = {}
    let ext = ""
    switch(element_id) {
        case "nwjns": album_object = nwjns; break;
        case "omg": album_object = omg; break;
        case "getup": album_object = getup; break;
        case "gods": album_object = gods; break;
        case "atcy": album_object = atcy; break;
        case "bwya": album_object = bwya; break;
    }
    $(".album-modal-body").empty()
    $(".album-modal-body").append(album_object.code)

    $(".album-modal").css("display", "flex")
    setTimeout(function() {
        $(".album-main-box").css('opacity', '1')
        $(".album-main-box").css('transform', 'translateY(0)')
    }, 10);

})

// click event listener for menu exit button
$(".album-exit-button").click(() => {
    setTimeout(function() {
        $(".album-main-box").css('opacity', '0')
        $(".album-main-box").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".album-modal").css("display", "none")
    }, 100)
})

// exit on click outside the box
$(".album-modal").click(() => {
    setTimeout(function() {
        $(".album-main-box").css('opacity', '0')
        $(".album-modal").css('transform', 'translateY(-30%)')
    }, 10);
    setTimeout(() => {
        $(".album-main-box").css("display", "none")
    }, 100)
})
$(".album-main-box").click((e) => {
    e.stopPropagation()
})