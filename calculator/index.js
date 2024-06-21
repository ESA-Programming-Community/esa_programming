let numbers = document.querySelectorAll(".number")
let screenInput = document.querySelector(".screen-input")

numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
        let buttonText = number.innerHTML
        screenInput.value +=  buttonText
    })
})


// Write the loop for the operators
// Read on the eval() function and use that to complete the project
