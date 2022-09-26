function biggerText() {
    alert("Hello, world!");
    document.getElementById("text").style.fontSize = "24pt";
}

function fancyChange() {
    alert("FancySchmancy!");
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecorationLine = "underline";
}

function boringChange() {
    alert("BoringBetty!");
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}

function mooText() {
    let text = document.getElementById("text");
    let upper = text.value.toUpperCase();
    let sentences = upper.split(".");
    let moo = sentences.join("-Moo.")
    text.value = moo;
}