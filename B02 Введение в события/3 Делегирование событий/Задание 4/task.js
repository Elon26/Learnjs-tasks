"use strict"

let tooltip;

document.addEventListener("mouseover", e => {
    const target = e.target;

    if (!target.closest("[data-tooltip]")) return;

    tooltip = document.createElement("div");
    document.body.append(tooltip);
    tooltip.className = "tooltip";
    tooltip.innerHTML = target.dataset.tooltip;

    const targetCoords = target.getBoundingClientRect();

    const tooltipTopCoordInTop = targetCoords.top - tooltip.offsetHeight - 5;
    const tooltipTopCoordInBottom = targetCoords.bottom + 5;
    tooltip.style.top = ((window.pageYOffset <= tooltipTopCoordInTop) ? tooltipTopCoordInTop : tooltipTopCoordInBottom) + "px";

    const tooltipLeftCoord = (targetCoords.left + (targetCoords.right - targetCoords.left) / 2) - tooltip.offsetWidth / 2;
    tooltip.style.left = ((tooltipLeftCoord > 0) ? tooltipLeftCoord : 0) + "px"
});

document.addEventListener("mouseout", e => {
    if (e.target.closest("[data-tooltip]")) tooltip.remove();
});
