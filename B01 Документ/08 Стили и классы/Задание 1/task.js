"use strict"

function showNotification({ top = 0, right = 0, html, className }) {
    const notification = document.createElement("div");

    notification.textContent = html;
    notification.className = `notification ${className}`;
    notification.style.top = top + "px";
    notification.style.right = right + "px";

    document.body.append(notification);

    setTimeout(() => {
        notification.remove();
    }, 1500);
}

let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);