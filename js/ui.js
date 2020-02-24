export function log(message) {
    document.querySelector("#actionbox").insertBefore(document.createElement("p"), document.querySelector("#actionbox"));
    document.querySelector("#actionbox").firstChild.innerHTML = message;
}

export function displayStatus(monstre) {

    document.querySelector(".life").innerHTML = "life :" + monstre[1];
    document.querySelector(".money").innerHTML = "money:" + monstre[2];
    if (monstre[3]) {
        document.querySelector(".sleep").innerHTML = "awake"
    } else {
        document.querySelector(".sleep").innerHTML = "sleep"
    }
}