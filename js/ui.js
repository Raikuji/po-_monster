export function log(message) {
    let node = document.querySelector("#actionbox").insertBefore(document.createElement("p"), document.querySelector("#actionbox").firstChild);
    node.innerHTML = message;
}

export function displayStatus(monstre) {

    document.querySelector(".life").innerHTML = "life:" + monstre[1];
    document.querySelector(".money").innerHTML = "money:" + monstre[2];
    if (monstre[3]) {
        document.querySelector(".sleep").innerHTML = "awake"
    } else {
        document.querySelector(".sleep").innerHTML = "sleep"
    }

    let box = document.querySelector('#monster');

    if (monstre[1] >= 15) {
        box.style.backgroundColor = 'green';
    } else if (monstre[1] < 15 && monstre[1] >= 10) {
        box.style.backgroundColor = 'blue';
    } else if (monstre[1] < 10 && monstre[1] >= 5) {
        box.style.backgroundColor = 'orange';
    } else if (monstre[1] < 5) {
        box.style.backgroundColor = 'red';
    }

    box.style.border = monstre[2]/10 + 'px solid';
}