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
    let run = document.querySelector("#b2");
    run.addEventListener('click', (event) => {
        ac.run();
    });
    let fight = document.querySelector("#b3");
    fight.addEventListener('click', (event) => {
        ac.fight();
    });
    let work = document.querySelector("#b7");
    work.addEventListener('click', (event) => {
        ac.work();
    });
    let eat = document.querySelector("#b5");
    eat.addEventListener('click', (event) => {
        ac.eat();
    });
}