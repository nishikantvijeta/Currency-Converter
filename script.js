document.addEventListener("DOMContentLoaded", function () {
    const fromDropDown = document.getElementById("fromDropDown");
    const toDropDown = document.getElementById("toDropDown");
    const button = document.getElementById("button");
    const resultParagraph = document.getElementById("result");
    const exchangeRates = {
        INR: 1,    // 1 INR = 1 INR (base currency)
        USD: 0.014, // 1 INR = 0.014 USD
        GBP: 0.011, // 1 INR = 0.011 GBP
        RUB: 1.04   // 1 INR = 1.04 RUB
    };

    // Populate dropdowns with currency options
    const currencies = Object.keys(exchangeRates);
    currencies.forEach((currency) => {
        const option1 = document.createElement("option");
        option1.innerText = currency;
        option1.value = currency;
        fromDropDown.appendChild(option1);

        const option2 = document.createElement("option");
        option2.innerText = currency;
        option2.value = currency;
        toDropDown.appendChild(option2);
        toDropDown.value = "USD";
    });

    // Convert function
    button.addEventListener("click", function () {
        const amount = parseFloat(document.getElementById("amount").value);
        const fromCurrency = fromDropDown.value;
        const toCurrency = toDropDown.value;

        if (isNaN(amount)) {
            resultParagraph.innerText = "Please enter a valid amount.";
            return;
        }

        if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
            resultParagraph.innerText = "Invalid currency selection.";
            return;
        }

        const convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);
        resultParagraph.innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}.`;
    });
});

