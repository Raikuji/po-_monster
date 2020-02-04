let name;
let life;
let money;
let awake;

let get = function get() {
    return [name, life, money, awake];
}

let init = function init(n, l, m, a) {
    name = n;
    life = l;
    money = m;
    awake = a;
}

export default {
    get: get,
    init: init
}