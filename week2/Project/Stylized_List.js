let quote = {
    "anime": "Baccano!",
    "character": "Goose Perkins",
    "quote": "We have no reason to fear death, for we have become ghosts while still alive."
}
document.getElementById("json-result").innerHTML = JSON.stringify(quote, undefined, 2);