import {log} from './ui.js';

let name;
let life;
let money;
let awake;

export let get = function get() {
    return [name, life, money, awake];
}

export let init = function init(n, l, m, a) {
    name = n;
    life = l;
    money = m;
    awake = a;
}

function isAlive() {
    if (life == 0) {
        return false;
    } else {
        return true;
    }
}

export function kill() {
    if (life != 0) {
        life = 0;
        log("Le monstre a été tué");
    } 
}

export function newlife() {
    if (life == 0) {
        life = 20;
        log("Le monstre a été réssucité")
    }
}

export function run() {
    if (life > 0 && awake) {
        life -= 1;
        if (life != 0)
            log("Il a couru et perdu 1 PV");
        else
            log("Il a couru mais en est mort, rip");
    } else {
        log("Le monstre dort ou est mort");
    }
}

export function fight() {
    if (life >= 3 && awake) {
        life -= 3;
        log("il a combattu et perdu 3PV")
    } else if (life > 0 && life < 3 && awake) {
        life = 0;
        log("le monstre est mort en combattant");
    } else {
        log("Le monstre dort ou est mort");
    }
}

export function work() {
    if (life > 0 && awake) {
        life -= 1;
        money += 2;
        if (life != 0)
            log("Il a bien travaillé");
        else 
            log("Mort au travail, pauvre vie");
    } else {
        log("Le monstre dort ou est mort");
    }
}

export function eat() {
    if (life >= 0 && awake && money >= 3) {
        money -= 3;
        life += 2;
        log("Il a bien mangé !")
    } else {
        log("Le monstre dort ou mort ou pauvre");
    }
}

export function sleep() {
    if (life >= 0 && awake) {
        awake = false;
        log("Il s'endort... zzzz")
        setTimeout(function() { 
            awake = true;
            life += 1; 
            log("Il vient de réveiller et gagne 1 PV")}, 10000);
    } else {
        log("Il est mort ou déjà endromi");
    }
}

export function actionsContinues() {
    let interval = setInterval(function() {
        if (life <=0) {
            clearInterval(interval);
        } else {
            life--;
            log("Il a perdu 1PV");
            switch (Math.round(Math.random() * 5)) {
                case 1:
                    run();
                    break;
                case 2:
                    work();
                    break;
                case 3:
                    eat();
                    break;
                case 4:
                    fight();
                    break;
                case 5:
                    sleep();
                    break;
            }
        }
    }, 12000);
}
