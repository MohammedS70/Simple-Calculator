let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            try {
                string = String(eval(string.replace('x', '*')))
            } catch {
                string = "Error"
            }
            inputBox.value = string;
        } else if (b.target.innerText == 'C') {
            string = "";
            inputBox.value = string;
        } else if (b.target.innerText == 'Del') { // Backspace
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        } else {
            string += b.target.innerText;
            inputBox.value = string;
        }
    });
});
