let name;
let life;
let money;
let awake;

export let get = function get() {
    return JSON.stringify([name, life, money, awake]);
}

export let init = function init(n, l, m, a) {
    name = n;
    life = l;
    money = m;
    awake = a;
}