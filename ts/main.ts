const input = document.querySelector("input");
let sum: number = 5000
let inputValue: number = (Number)(input!.value);
inputValue += sum;
let valueAt = (Number)(input!.setAttribute("value", `${inputValue}`));

function tryParse(): number {
    let a = 0
    while (a === 0) {
        let promptNumber = Number(prompt("Please enter the amount:"));
        while (!isNaN(promptNumber)) {
            a = 1
            return promptNumber;
        }
    }
    return 0;
}


function addToBank(sum: number): number {
    let amount = tryParse();
    let result = amount + sum;
    return result;
}

function getFromBank(sum: number): number {
    let a = 0;
    let result = 0;
    while (a === 0) {
        let amount = tryParse();
        if (sum >= amount) {
            result = sum - amount;
            a = 1;
            return result;
        }
        else {
            alert("You have no money for that operation enter 0 if you want to return");
        }
    }
    return sum;

}

function addValue() {
    const actionBtns = document.querySelectorAll(".action-btn");
    actionBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            let key = btn.getAttribute('value');
            console.log(key);

            switch (key) {
                case "+":
                    sum = addToBank(sum);
                    (Number)(input!.setAttribute("value", `${sum}`));
                    break;
                case "-":
                    sum = getFromBank(sum);
                    (Number)(input!.setAttribute("value", `${sum}`));
                    break;
                default:
            }

        })
    })
}

addValue();