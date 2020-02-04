import * as ac from './actions.js';

export function start() {
    ac.init("Jean", 20, 23456, false);
    let a = document.querySelector("#b6");
    a.addEventListener("click", (event) => {
        alert(ac.get());
    });
}

