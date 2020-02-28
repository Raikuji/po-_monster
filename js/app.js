import * as ac from './actions.js';
import * as ui from './ui.js';

export function start() {
    ac.init("Jean", 20, 50, true);
    ac.actionsContinues();
    ui.displayStatus(ac.get());
    ui.log(ac.get());
    let a = document.querySelector("#b6");
    a.addEventListener("click", () => {
        alert(ac.get());
        ui.displayStatus(ac.get())
    });
    let run = document.querySelector("#b2");
    run.addEventListener('click', () => {
        ac.run();
        ui.displayStatus(ac.get())
    });
    let fight = document.querySelector("#b3");
    fight.addEventListener('click', () => {
        ac.fight();
        ui.displayStatus(ac.get())
    });
    let work = document.querySelector("#b7");
    work.addEventListener('click', () => {
        ac.work();
        ui.displayStatus(ac.get())
    });
    let eat = document.querySelector("#b5");
    eat.addEventListener('click', () => {
        ac.eat();
        ui.displayStatus(ac.get())
    });
    let sleep = document.querySelector("#b4");
    sleep.addEventListener('click', () => {
        ac.sleep();
        ui.displayStatus(ac.get())
    });
    let kill = document.querySelector("#k");
    kill.addEventListener('click', () => {
        ac.kill();
        ui.displayStatus(ac.get())
    });
    let respawn = document.querySelector("#b1");
    respawn.addEventListener('click', () => {
        ac.newlife();
        ui.displayStatus(ac.get());
        ac.actionsContinues();
    });
}