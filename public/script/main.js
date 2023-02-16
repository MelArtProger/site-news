function logoRotate360() {
    let logo = document.querySelector("#logo")
    logo.style.transform = "rotate(360deg)";
}

function logoRotate0() {
    let logo = document.querySelector("#logo")
    logo.style.transform = "rotate(0deg)";
}

$('.up-btn').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
});