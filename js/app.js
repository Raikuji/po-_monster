import * as ac from 'actions.js';

export function start() {
    let a = document.querySelector("#b6");
    a.addEventListener("click", (event) => {
        alert(ac.get());
    });
}

