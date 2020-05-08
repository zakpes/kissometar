const number = document.querySelector(".number");
let numOfKisses = 0;

document.addEventListener("click", function() {

    numOfKisses += 1;
    number.innerText = numOfKisses;
});