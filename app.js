document.addEventListener("DOMContentLoaded", () => {
    console.log(`Thank you so much for the opportunity to 
work for such an incredible company, I hope this proves my worth and opens up the door for me into development. 
Thank you for your time, if you are interested in a surprise click ctrl+shift+L!
    `)
    let counter = 0;
    ctrl = false;
    shift = false;
    let img1 = document.querySelector("#phone")
    let img2 = document.querySelector("#utilities")
    // darkmode
    let darkmode = () => {
        if(counter % 2 == 0) {
            let body = document.querySelector("body")
            img1.src="assets/phone2.png"
            img2.src="assets/water2.png"
            body.className = "darkmode"
            counter++;
        } else {
            let body = document.querySelector("body")
            img1.src="assets/phone.png"
            img2.src="assets/water.png"
            body.classList.remove("darkmode")
            counter++;
        }
    }
    document.addEventListener("keydown", (e) => {
        if (e.key == "Control") {
            ctrl = true;
        } else if (e.key == "Shift") {
            shift = true;
        } else if (e.key == "L" && ctrl == true && shift == true) {
            darkmode();
            ctrl = false;
            shift = false;
        }
    })
})