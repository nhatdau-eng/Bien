function convertMoney() {
    const rates = {
        USD: 1,
        VND: 25000,
        EUR: 0.92,
        SAR: 3.72,
    };
    let amount =
        Number(document.getElementById("amount").value);

    let fromCurrency =
        document.getElementById("fromCurrency").value;

    let toCurrency =
        document.getElementById("toCurrency").value;

    let usd = amount / rates[fromCurrency];
    
    let result = usd * rates[toCurrency];

    document.getElementById("result").innerText =
        result.toFixed(2);
}