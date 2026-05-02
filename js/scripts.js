// Display current year in footer
document.getElementById("copyrightyear").innerHTML = new Date().getFullYear();

// Countdown to final race 
// Set the date we're counting down to
var countDownDate = new Date("Nov 29, 2026 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an html element
    document.getElementById("displaytimer").innerHTML = days + " days, " + hours + " hours, "
        + minutes + " minutes, " + seconds + " seconds ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("displaytimer").innerHTML = "EXPIRED";
    }
}, 1000);

// Return to Top Button
// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        document.getElementById("cornerBtn").style.display = "block";
    } else {
        document.getElementById("cornerBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Gallery function
// First gallery
let intIndex = 0
function showImage(i) {
    intIndex += i;

    let theImages = document.getElementsByClassName("image");

    for(n=0;  n<theImages.length; n++) {
        theImages[n].style.display = "none";
    }

    if (intIndex > theImages.length - 1) {
        intIndex = 0;
    }
    if (intIndex < 0) {
        intIndex = theImages.length - 1;
    }

    theImages[intIndex].style.display = "block";
}

// Second gallery
let intIndex2 = 0
function showImage2(i) {
    intIndex2 += i;

    let theImages = document.getElementsByClassName("image2");

    for(n=0;  n<theImages.length; n++) {
        theImages[n].style.display = "none";
    }

    if (intIndex2 > theImages.length - 1) {
        intIndex2 = 0;
    }
    if (intIndex2 < 0) {
        intIndex2 = theImages.length - 1;
    }

    theImages[intIndex2].style.display = "block";
}

// Third gallery
let intIndex3 = 0
function showImage3(i) {
    intIndex3 += i;

    let theImages = document.getElementsByClassName("image3");

    for(n=0;  n<theImages.length; n++) {
        theImages[n].style.display = "none";
    }

    if (intIndex3 > theImages.length - 1) {
        intIndex3 = 0;
    }
    if (intIndex3 < 0) {
        intIndex3 = theImages.length - 1;
    }

    theImages[intIndex3].style.display = "block";
}

// Fourth gallery
let intIndex4 = 0
function showImage4(i) {
    intIndex4 += i;

    let theImages = document.getElementsByClassName("image4");

    for(n=0;  n<theImages.length; n++) {
        theImages[n].style.display = "none";
    }

    if (intIndex4 > theImages.length - 1) {
        intIndex4 = 0;
    }
    if (intIndex4 < 0) {
        intIndex4 = theImages.length - 1;
    }

    theImages[intIndex4].style.display = "block";
}