export function log(message) {
    document.querySelector("#actionbox").appendChild(document.createElement("p")).innerHTML = message;
}