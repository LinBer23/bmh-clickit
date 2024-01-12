document.addEventListener("DOMContentLoaded", (event) => {
    const e_target = document.getElementById("target");
    const e_playarea = document.getElementById("playarea");
    e_playarea.addEventListener("click", (event) => {
        console.log(event.target === e_target ? "Treffer" : "Daneben");
        const target = {
            width: 200,
            height: 150,
        };

        const playarea = {
            width: 800,
            height: 600,
        };

        const top = Math.random() * (playarea.height - target.height);
        const left = Math.random() * (playarea.width - target.width);
        e_target.style.top = `${top}px`;
        e_target.style.left = `${left}px`;
    });
});
