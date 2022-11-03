var emoji = document.querySelector("#icon");
var par = document.querySelector("#par");
let temprature = () => {
    let opt = document.querySelector("#unit");
    let display = document.querySelector(".value");
    var a = document.querySelector(".takval").value;
    if (opt.value == "Celsius") {
        console.log(a, "C to F", opt.value)
        let F = a * (9 / 5) + 32
        display.innerHTML = F.toFixed(4) + " F"
        if (F < 32) {
            emoji.style = "color:blue"
            emoji.className = "fa-solid fa-face-grimace"
            par.innerHTML = "Cool at frezing point"
        } else if (F > 122) {
            emoji.style = "color:red"
            emoji.className = "fa-solid fa-face-dizzy"
            par.innerHTML = "Very Warm"
        } else {
            emoji.className = "fa-solid fa-face-grin"
            par.innerHTML = ""
            emoji.style = "color:rgb(253, 174, 37)"
        }

    } else {
        console.log(a, "F to C", opt.value)
        let C = (a - 32) * (5 / 9)
        display.innerHTML = C.toFixed(4) + " ºC"
        if (C < 0) {
            emoji.style = "color:blue"
            emoji.className = "fa-solid fa-face-grimace"
            par.innerHTML = "Cool at frezing point"
        } else if (C > 50) {
            emoji.style = "color:red"
            emoji.className = "fa-solid fa-face-dizzy"
            par.innerHTML = "Very Warm"
        } else {
            emoji.className = "fa-solid fa-face-grin"
            par.innerHTML = ""
            emoji.style = "color:rgb(253, 174, 37)"
        }
    }
}