const decrementBtn = document.getElementById("decrementBtn")
const incrementBtn = document.getElementById("incrementBtn")
const resetBtn = document.getElementById("resetBtn")
const displayValue = document.getElementById("displayValue")

// for decrement button Mousehover

decrementBtn.addEventListener("mouseover", () => {
    const value = Number(displayValue.innerText);
    if (value > 0){
        displayValue.innerText = value - 1;
    }else{
        alert("Negative value not allowed");
    }
});

// for increment button Mousehover

incrementBtn.addEventListener("mouseover", () => {
    const value = Number(displayValue.innerText);
    if (value >=  10) {
        alert("10+ values are not allowed");
    }else{
        displayValue.innerText = value + 1;
    }

});

// for reset button Mousehover

resetBtn.addEventListener("mouseover",() => {
    displayValue.innerText = 0;
});