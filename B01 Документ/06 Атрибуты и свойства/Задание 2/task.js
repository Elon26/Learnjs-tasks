"use strict"

let links = document.querySelectorAll('a');

links.forEach(link => {
    const href = link.getAttribute("href");

    if (href && href.includes("://") && !href.startsWith("http://internal.com")) {
        link.style.color = 'orange'
    }
})

