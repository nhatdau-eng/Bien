const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b === 0
        ? "Không thể chia cho 0"
        : a / b
}
function calculate(operator) {

            let number1 =
                Number(document.getElementById("num1").value);

            let number2 =
                Number(document.getElementById("num2").value);

            let result =
                operations[operator](number1, number2);

            document.getElementById("result").innerText =
                "Kết quả: " + result;
        }
