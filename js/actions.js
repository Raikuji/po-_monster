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
    if (life <= 0) {
        return false;
    } else {
        return true;
    }
}

export function run() {
    if (life >= 0 && awake) {
        life -= 1;
        if (isAlive)
            log("Il a couru et perdu 1 PV");
        else
            log("Il a couru mais en est mort, rip");
    } else {
        log("Le monstre dort ou est mort");
    }
}

export function fight() {
    if (life >= 0 && awake) {
        life -= 3;
        if (isAlive) 
            log("Il a combattu");
        else 
            log("Il est mort en combattant")
    } else {
        log("Le monstre dort ou est mort");
    }
}

export function work() {
    if (life >= 0 && awake) {
        life -= 1;
        money += 2;
        if (isAlive)
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