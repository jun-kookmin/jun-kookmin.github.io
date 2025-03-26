document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById('toggle');
    const body = document.body;

    icon.addEventListener('click', function () {
        const isDark = body.style.backgroundColor === 'black';

        body.style.backgroundColor = isDark ? 'white' : 'black';
        body.style.color = isDark ? 'black' : 'white';
        icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tiles = document.querySelectorAll(".tile");
    const introduces = document.querySelectorAll(".introduce");

    tiles.forEach(function(tile, index) {
        tile.addEventListener("click", function () {
            introduces.forEach(function(intro) {
                if (tile.style.visibility === "visible" || tile.style.visibility === "") {
                    tile.style.visibility = "hidden";
                } else {
                    tile.style.visibility = "visible";
                }
            });
        });
    });
});