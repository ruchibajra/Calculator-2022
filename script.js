// SELECTOR
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

// EVENT LISTENER
keys.forEach (key=> {
    key.addEventListener("click", calculate);
});


// CALCULATE FUNCTION START
var sign = 0;
function calculate(){
    let buttonText = this.innerText;

    // if operator is pressed more than once START
    let isSign = (buttonText == '*' || buttonText == '+' || buttonText == '/' || buttonText == '-' || buttonText == '.');


    if (isSign && sign==0 )
        sign = 1;
    else if (isSign && sign ==1) return;
    else sign = 0;

    // if operator is pressed more than once END

    // when AC, DEL, EQUALS TO sign is pressed START
    if (buttonText === "AC"){
        output.innerText = "";
        result.innerText = "";
        return;
    }

    else if (buttonText === "DEL"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }

     else if (buttonText === "="){
        result.innerText = eval(output.innerText);
    }

    else{
        output.textContent += buttonText;
        return;
    }
    // when AC, DEL, EQUALS TO sign is pressed END

}
// CALCULATE FUNCTION END

