import * as ac from './actions.js';
import * as ui from './ui.js';

export function start() {
    ac.init("Jean", 20, 23456, false);
    ui.displayStatus(ac.get())
    ui.log(ac.get())
    let a = document.querySelector("#b6");
    a.addEventListener("click", (event) => {
        alert(ac.get());
    });

}

